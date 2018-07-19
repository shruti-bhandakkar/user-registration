import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Login from './components/Login.js'

class App extends Component {

    constructor(props) {
        super(props);
        this.state =  {
            loginSuccess: false,
            username: ""
        }
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin(username, password) {
        // simulating ajax call
        if(username == 'shrutiB' && password == 'shruti') {
            this.setState({
                loginSuccess: true,
                username: username
            })
        }
    }

  render() {
    return (
      <div className="App">
          <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
          </header>

          { (!this.state.loginSuccess )? <Login handleLogin={this.handleLogin}></Login> : <p> you are logged in {this.state.username}</p> }
          
      </div>
    );
  }
}

export default App;
