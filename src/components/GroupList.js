import React from 'react';


export default class GroupList extends React.Component {
  constructor(props){
    super(props)
    console.log(props)
  }



  render(){
    return (
      <div>
      <h3>{this.props.user.name}</h3>
    </div>
    )
  }
}
