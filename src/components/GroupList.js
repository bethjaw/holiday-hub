import React from 'react';


export default class GroupList extends React.Component {
  constructor(props){
    super(props)
    console.log(props)

    this.state = {
      wishlist: [],

    }
  }

  async componentDidMount(){
    const response = await fetch(`https://holidayhub-api.herokuapp.com/api/gifts/1${this.props.user.users_id}`)
    const json = await response.json()
    this.setState({wishlist: json})
  }

  onClickList = (e) => {

  }


  render(){
    console.log(this.state.wishlist)
    return (
      <div>
      <button className='goToSingleBtn' onClick={this.onClickList}>{this.props.user.name}</button>
    </div>
    )
  }
}
