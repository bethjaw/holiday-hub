import React from 'react';

export default class SingleWishList extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      giftData: [],
    }
  }

  async componentDidMount(){
    const response = await fetch(`https://holidayhub-api.herokuapp.com/api/gifts/${this.props.wishlist.users_id}`)
    const json = await response.json()
    this.setState({
      giftData: json
    })
  }




  render(){
    console.log(this.props);
    // console.log('single props', this.props.wishlist.users_id)
    // console.log('giftData', this.state.giftData)
    return (
      <h1>All the things on the wish list...</h1>
    )
  }
}
