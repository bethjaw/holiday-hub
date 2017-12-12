import React from 'react';



export default class LoginForm extends React.Component {
  render(){
    return(
      <form onSubmit={this.props.userLogin}>
        <label>Email</label>
        <input name='email' value=''></input>
        <label>Password</label>
        <input name='password' value=''></input>
        <button>log in </button>
      </form>
    )
  }
}
