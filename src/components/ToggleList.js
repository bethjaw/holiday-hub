import React from 'react';
import MyGroup from './MyGroup';
import GroupList from './GroupList';
import SingleWishList from './SingleWishList';

export default class ToggleList extends React.Component{
  constructor(props){
    super(props)

    this.state = {

    }
  }



  render(){
    return(
      <MyGroup data={this.state.data}
      isLoggedIn={this.state.isLoggedIn}
      currentUser={this.state.currentUser}/>
    )
  }
}
