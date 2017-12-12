import React, { Component } from 'react';
import LandingPage from './components/LandingPage'
import LoginForm from './components/LoginForm'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      data: [],
      loginForm: false,
      isLoggedIn: false,
    }
  }

  async componentDidMount(){
    const response = await fetch('https://holidayhub-api.herokuapp.com/api/users')
    const json = await response.json()
    this.setState({data: json})
  }

  toggleLogin = () => {
    console.log('clicked!')
      this.setState({loginForm: !this.state.loginForm})
  }

  renderLoginForm(){
    if(this.state.loginForm){
      return <LoginForm />
    } else
    return
  }

  // checkLogin = (e) => {
  //   console.log("clicked!")
  // }

  render() {
    return (
      <Router>
        <div>
          <LandingPage toggleLogin={this.toggleLogin} loginForm={this.state.loginForm} data={this.state.data}/>
          {this.renderLoginForm()}
        </div>
      </Router>
    );
  }
}

export default App;
