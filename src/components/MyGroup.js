import React from 'react';
import GroupList from './GroupList'
import '../App.css';



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
    this.setState({
      usersInGroup: json
    })
  }



  render(){
    // console.log(this.state.usersInGroup)
    return(
      <div>
        <header className='mygrouphead'>
          <h1 className="holidayTitle">Holiday Hub!</h1>
        </header>
        <section className='groupWelcome'>
          <h2>Welcome {this.props.currentUser.name}!</h2>
            <h4>Group: {this.props.currentUser.group_name}</h4>
              <p>Check out everyones wish list below!</p>
        </section>
        <section className='personBtns'>
          {this.state.usersInGroup.map((user) => {
            return <GroupList key={user.users_id} user={user}
            isLoggedIn={this.props.isLoggedIn}
            currentUser={this.props.currentUser}

            />
          })}
        </section>
      </div>
    )
  }
}
