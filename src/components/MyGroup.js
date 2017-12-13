import React from 'react';

export default class MyGroup extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      usersInGroup: [],
      singleUser: ''
    }
  }

  async componentDidMount(){
    const response = await fetch(`https://holidayhub-api.herokuapp.com/api/userByGroup/${this.props.currentUser.users_id}`)
    const json = await response.json()
    this.setState({usersInGroup: json})
  }


  render(){
    console.log(this.state.usersInGroup)
    return(
      <div>
        <h1>Welcome {this.props.currentUser.name}!</h1>
          <h3>Your in group {this.props.currentUser.group_name}</h3>
          <p>Check out their wish lists below!</p>
      </div>
    )
  }
}
