import React from 'react';
import SingleWishList from './SingleWishList';


export default class GroupList extends React.Component {
  constructor(props){
    super(props)
    // console.log('props', props)

    this.state = {
      wishlist: [],
    }
  }


  onClickList = (e) => {
    e.preventDefault()
    this.setState({
      wishlist: this.props.user
    })

  }


  render(){
    // console.log('this.state.wishlist', this.state.wishlist)
    return (
      <div>
        <form onSubmit={this.onClickList}>
          <input type='hidden' name='user_id' value={this.props.user}/>
          <button className='goToSingleBtn'>{this.props.user.name}</button>
        </form>
        <SingleWishList wishlist={this.state.wishlist}/>
    </div>
    )
  }
}
