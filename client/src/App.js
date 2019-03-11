import React, { Component } from "react";
import * as $ from "axios";
import Login from "./components/Login";
import Home from "./components/Home";
import Form from "./components/Form";
import "./App.css";
import Nav from "./components/Nav";
import Alert from "./components/Alert";
import Profile from "./components/Profile";

class App extends Component {
  state = {
    email: "",
    password: "",
    userid: "",
    fullname: "",
    isLogin: false,
    isInvalid: false,
    postsList: [],
    body: "",
    input: "",
    picture: ""
  };
  }

  handleReverse = (e) =>
  e.preventDefault();

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
      console.log("inside App.js then:", data);
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
    console.log("Search friend");
  };

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
              />
              <Form
                btnName={"Search"}
                value={this.state.input}
                handleChange={this.handleSearchChange}
                handleClick={this.handleSearchClick}
              />
            </div>
            <div className="row">
              <div className="col">
                <Profile
                  fullname={this.state.fullname}
                  picture={this.state.picture}
            <div className='row'>
              <div className='col'>
                <Profile 
                  fullname={this.state.fullname}
                   picture={this.state.picture}
                    />
              </div>
              <div className='col-7'>
                <Home
                  allPosts={this.state.postsList}
                  getNameById={this.getNameById}
                />
              </div>
              <div className="col-7">
                <Home allPosts={this.state.postsList} />
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
