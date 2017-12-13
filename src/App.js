import React, { Component } from 'react';
import LandingPage from './components/LandingPage'
import LoginForm from './components/LoginForm'
import MyGroup from './components/MyGroup'

// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      data: [],
      loginForm: false,
      isLoggedIn: false,
      currentUser: [],
      removeLanding: true,
    }
  }

  async componentDidMount(){
    const response = await fetch('https://holidayhub-api.herokuapp.com/api/usergroupdata')
    const json = await response.json()
    this.setState({data: json})
  }

  toggleLogin = () => {
      this.setState({loginForm: !this.state.loginForm})
  }

  renderLoginForm(){
    if(this.state.loginForm){
      return <LoginForm
        userLogin={this.checkLogin}
      />
    } else
    return
  }

  checkLogin = (e) => {
    e.preventDefault()
    let userLogin = {
      email: e.target.email.value,
      password: e.target.password.value
    }

    let user = ''
    for(var i=0; i < this.state.data.length; i++){
      if(this.state.data[i].email === userLogin.email && this.state.data[i].password === userLogin.password){
        user = this.state.data[i]
        }
      }
      this.setState({
        isLoggedIn: true,
        currentUser: user,
        removeLanding: false,
        loginForm: false,
      })
    }



  render() {
    // console.log('removelanding', this.state.removeLanding);
    // console.log('currentuser state', this.state.currentUser)
    // console.log(this.state.isLoggedIn)
    return (
        <div>
          {this.state.removeLanding ? <LandingPage
            toggleLogin={this.toggleLogin}
            data={this.state.data}
          /> : null
        }

        {this.renderLoginForm()}


          {
            this.state.isLoggedIn ? <MyGroup data={this.state.data}
            isLoggedIn={this.state.isLoggedIn}
            currentUser={this.state.currentUser}
          /> : null
          }

        </div>
    );
  }
}

export default App;
