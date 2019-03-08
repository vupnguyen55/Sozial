import React, { Component } from 'react';
import * as $ from 'axios';
import Login from './components/Login';
import Home from './components/Home';
import Header from './components/Header';
import './App.css';

class App extends Component {
  state = {
    email: '',
    password: '',
    isLogin: false,
    postsList: [],
    body: ''
  }

  handleChange = (e) => {
    this.setState({ email: e.target.value });
  }

  handleLogin = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleLoginButton = (e) => {
    e.preventDefault();
    const loginData = {
      email: this.state.email,
      password: this.state.password
    }
    
    $.post('/api/session', loginData)
    .then((response) =>{
      console.log(typeof response.data);
      if (response.data) {
        this.setState({ isLogin: true })
      }
    });
  }

  getPosts = () => {
    $.get('/api/posts')
      .then((result) => {
        this.setState({ postsList: result.data })
      })
  }

  componentDidMount() {
    this.getPosts();
  }
  //Home page
  handleChange = (e) => {
    this.setState({ body: e.target.value });
  }
  // Home page
  handlePost = (e) => {
    e.preventDefault();
    $.post('/api/posts', this.state.body)
    .then(function(data) {
      this.getPosts();
    });
  }

  render() {

    return (
      <div className="App">
      <Header />
        {this.state.isLogin ? (
          <Home 
            allPosts={this.state.postsList}
          />
        ) : (
            <Login
              handleLogin={this.handleLogin}
              handleLoginButton={this.handleLoginButton}
              email={this.state.email}
              password={this.state.password}

            />
          )}

      </div>
    );
  }
}

export default App;
