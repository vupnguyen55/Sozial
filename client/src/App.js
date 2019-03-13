import React, { Component } from 'react';
import * as $ from 'axios';
import Login from './components/Login';
import Home from './components/Home';
import Form from './components/Form';
import './App.css';
import Nav from './components/Nav';
import Alert from './components/Alert';
import Profile from './components/Profile';
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
    idList: [],
    friendsname: [],
    body: '',
    input: '',
    picture: '',
    regEmail: '',
    regPss: '',
    regFullName: '',
    regImg:''
  };

  handleRegister = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleRegisterClick = e => {
    e.preventDefault();
    const newData = {
      email: this.state.regEmail,
      password: this.state.regPss
    };
    $.post('/api/user', newData)
    .then((res) => {
      $.post('/api/friend', { user_id: res.data.id, friend_id: 1 })
      .then((data) => {
        this.setState({ regEmail: '', regPss: ''});
      });
    });
  }
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
      if (res.data) {
        this.setState({
          isLogin: true,
          userid: res.data.id,
          fullname: res.data.full_name,
          picture: res.data.picture
        });
        this.getPosts();
      } else {
        this.setState({ isInvalid: true });
      }
    });
  };

  getPosts = () => {
    const loginId = this.state.userid;
    $.get('/api/friendship/' + loginId)
    .then((res) => {
      let idArray = [loginId];
      for (let i in res.data) {
        idArray.push(res.data[i].friend_id);
      }
      $.get('/api/friends/' + loginId)
      .then((res2) => {
        for (let i in res2.data) {
          idArray.push(res2.data[i].user_id);
        }
        $.get('/api/allposts/'+ idArray)
        .then((result) => {
          this.setState({ postsList: result.data.reverse(), body: '' });
        });
      })
    });
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
    $.post('/api/friend', { user_id: this.state.userid, friend_id: e.currentTarget.value })
      .then((data) => {
        this.getPosts();
      });
  }

  handleUpdate = (e) => {
    e.preventDefault();
    const newData = {
      _id: this.state.userid,
      email: this.state.regEmail,
      password: this.state.regPss,
      full_name: this.state.regFullName,
      picture: this.state.regImg,
    };
    $.put('/api/users/:id', {_id: this.state.userid}, newData)
    .then((data) => {
      this.setState({
        regEmail: '',
        regPss: '',
        regFullName: '',
        regImg: '',
      })
    })
  }

  // clear button
  clearSearch = (e) => {
    e.preventDefault();
    this.getPosts();
    this.setState({ isSearch: false, input: '' });
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
              handleAddClick={this.handleAddClick} />
            <div className="container">
              <div className='row'>
                <div className='col'>
                  <Profile
                    fullname={this.state.fullname}
                    picture={this.state.picture}
                    handleUpdate={this.handleUpdate}
                    handleRegister={this.handleRegister}
                  />
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
                  handleRegister={this.handleRegister}
                  handleRegisterClick={this.handleRegisterClick}
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