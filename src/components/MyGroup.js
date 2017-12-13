import React from 'react';
import GroupList from './GroupList'

export default class MyGroup extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      usersInGroup: [],
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
          <p>Check out everyones wish list below!</p>

          {this.state.usersInGroup.map((user) => {
            return <GroupList key={user.users_id} user={user}
              isLoggedIn={this.props.isLoggedIn}
              currentUser={this.props.currentUser}
            />
          })}
      </div>
    )
  }
}
