
import React, { Component } from 'react';
import * as $ from 'axios';
import Login from './components/Login';
import Home from './components/Home';
import Form from './components/Form';
import './App.css';
import Nav from './components/Nav';
import Alert from './components/Alert';
import Profile from './components/Profile';
// import Friend from './components/Friend';
import HomeNav from './components/HomeNav'

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
        console.log('res from search: ', res.data);
        this.setState({ isSearch: true, friendsname: res.data });
      });
  }
  // add friend button
  handleAddClick = (e) => {
    e.preventDefault();
    console.log('add button id value', e.target.value);
    $.post('/api/friend', { user_id: this.state.userid, friend_id: e.target.value })
      .then((data) => {
        console.log('inside App.js then:', data);

      });
  }


  render() {
    return (
      <div className="App">
        {this.state.isLogin ? (
          <div>
            <HomeNav
              btnName={"Search"}
              value={this.state.input}
              handleChange={this.handleSearchChange}
              handleClick={this.handleSearchClick}
              placeholder={"Search friends by name..."} 
              fullname={this.state.fullname}
              picture={this.state.picture}
              friendsname={this.state.friendsname}
              handleAddClick={this.handleAddClick}/>
            <div className="container">
              <div className='row'>
                <div className='col'>
                  <Profile
                    fullname={this.state.fullname}
                    picture={this.state.picture}
                  />
                  <p><a href="">Friends</a></p>
                  <p><a href="">Groups</a></p>
                  <p><a href="">History</a></p>
                  <p><a href="">About</a></p>
                  <p><a href="">Settings</a></p>
                </div>
                <div className='col-7'>
                  {this.state.friendsname ? (
                    <div></div>
                  ) : ('No Friends')}
                  <div className="container">
                    <Form
                      btnName={"Post"}
                      value={this.state.body}
                      handleChange={this.handlePostChange}
                      handleClick={this.handlePostClick}
                      placeholder={"What's on your mind..."}
                    />
                    <Home
                      allPosts={this.state.postsList}
                    />
                  </div>
                </div>
                <div className="col" />
              </div>
            </div>
          </div>

        ) : (
            <div>
              <Nav />
              <div>
                <Login
                  handleLogin={this.handleLogin}
                  handleLoginButton={this.handleLoginButton}
                  email={this.state.email}
                  password={this.state.password}
                />
              </div>
              {this.state.isInvalid ? (
                <Alert message="Invalid email or password!" />
              ) : (
                  <div></div>
                )}
            </div>
          )}
      </div>
    );
  }
}

export default App;
