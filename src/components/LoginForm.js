import React from 'react';



export default class LoginForm extends React.Component {
  render(){
    return(
      <form className='loginForm' onSubmit={this.props.userLogin}>
        <label className='formLabel'>Email</label>
        <input type='text' className='formInput' name='email'></input>
        <label className='formLabel'>Password</label>
        <input type='text' className='formInput' name='password'></input>
        <button className='loginBtnTwo'>log in</button>
      </form>
    )
  }
}
