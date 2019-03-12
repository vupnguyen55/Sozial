
import React, { Component } from 'react';
import * as $ from 'axios';
import Login from './components/Login';
import Home from './components/Home';
import Form from './components/Form';
import './App.css';
import Nav from './components/Nav';
import Alert from './components/Alert';
import Profile from './components/Profile';
import Friend from './components/Friend';

class App extends Component {
  state = {
    email: "",
    password: "",
    userid: "",
    fullname: "",
    isLogin: false,
    isInvalid: false,
    isSearch: false,
    postsList: [],

    friendsname: [],
    body: '',
    input: '',
    picture: ''
  };


  // email password input
  handleLogin = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  // login button
  handleLoginButton = e => {
    e.preventDefault();
    const loginData = {
      email: this.state.email,
      password: this.state.password
    };
    $.post("/api/session", loginData).then(res => {
      // console.log('res user data: ', res.data);
      if (res.data) {
        this.setState({
          isLogin: true,
          userid: res.data.id,
          fullname: res.data.full_name,
          picture: res.data.picture
        });
      } else {
        this.setState({ isInvalid: true });
      }
    });
  };

  getPosts = () => {
    $.get('/api/posts')
      .then((result) => {
        console.log('post data:', result.data);
        this.setState({ postsList: result.data.reverse() });
      })
  }

  componentDidMount() {
    this.getPosts();
  }
  // post input
  handlePostChange = e => {
    this.setState({ body: e.target.value });
  };
  // post button
  handlePostClick = e => {
    e.preventDefault();
    $.post("/api/post", {
      UserId: this.state.userid,
      body: this.state.body
    }).then(data => {
      this.getPosts();
    });
  };

  // search input
  handleSearchChange = e => {
    this.setState({ input: e.target.value });
  };
  // search button
  handleSearchClick = e => {
    e.preventDefault();
    $.get('/api/search/' + this.state.input)
      .then((res) => {
        this.setState({ isSearch: true, friendsname: res.data });
      });
  }
  // add friend button
  handleAddClick = (e) => {
    e.preventDefault();
    $.post('/api/friend', { user_id: this.state.userid, friend_id: e.target.value })
      .then((data) => {
        alert('friend added successfully!');
      });
  }
  // clear button
  clearSearch = (e) => {
    e.preventDefault();
    this.getPosts();
    this.setState({ isSearch: false, input: ''});
  }

  render() {
    return (
      <div className="App">
        <Nav />
        {this.state.isLogin ? (
          <div className="container">
            <div className="row">
              <Form
                btnName={"Post"}
                value={this.state.body}
                handleChange={this.handlePostChange}
                handleClick={this.handlePostClick}
                placeholder={"What's in your mind..."}
              />
              <Form
                btnName={"Search"}
                value={this.state.input}
                handleChange={this.handleSearchChange}
                handleClick={this.handleSearchClick}
                placeholder={"Search friends by name..."}
              />
            </div>
            <div className='row'>
              <div className='col'>
                <Profile
                  fullname={this.state.fullname}
                  picture={this.state.picture}
                />
              </div>
              <div className='col-7'>
                {!this.state.isSearch ? (
                  <Home allPosts={this.state.postsList} />
                ) : (
                    <Friend
                      friendsname={this.state.friendsname}
                      handleAddClick={this.handleAddClick}
                      clearSearch={this.clearSearch}
                    />
                  )}
              </div>
              <div className="col" />
            </div>
          </div>

        ) : (
            <div className="container">
              <Login
                handleLogin={this.handleLogin}
                handleLoginButton={this.handleLoginButton}
                email={this.state.email}
                password={this.state.password}
              />
              {this.state.isInvalid ? (
                <Alert message="Invalid email or password!" />
              ) : (
                  `Welcome!`
                )}
            </div>
          )}
      </div>
    );
  }
}

export default App;
