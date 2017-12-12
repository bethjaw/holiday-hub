import React, { Component } from 'react';
import LandingPage from './components/LandingPage'
import LoginForm from './components/LoginForm'
import Group from './components/Group'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      data: [],
      loginForm: false,
      isLoggedIn: false,
      currentUser: [],

    }
  }

  async componentDidMount(){
    const response = await fetch('https://holidayhub-api.herokuapp.com/api/users')
    const json = await response.json()
    this.setState({data: json})
  }

  toggleLogin = () => {
      this.setState({loginForm: !this.state.loginForm})
  }

  renderLoginForm(){
    if(this.state.loginForm){
      return <LoginForm userLogin={this.checkLogin}/>
    } else
    return
  }

  checkLogin = (e) => {
    e.preventDefault()
    let userLogin = {
      email: e.target.email.value,
      password: e.target.password.value
    }
    console.log(userLogin)
    let currentData = this.state.data
    for(var i=0; i < currentData.length; i++){
      if(currentData[i].email === userLogin.email && currentData[i].password === userLogin.password){
        this.setState({user: currentData[i]}, () => {
          this.setState({isLoggedIn: true})
        })
      }
    }
  }

  render() {
    console.log(this.state.data);
    return (
      <Router>
        <div>
          <LandingPage
            toggleLogin={this.toggleLogin}
            loginForm={this.state.loginForm}
            data={this.state.data}
          />
          {this.renderLoginForm()}
          
        </div>
      </Router>
    );
  }
}

export default App;
