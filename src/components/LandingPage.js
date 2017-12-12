import React from 'react';

export default class LandingPage extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="App">
        <header className="App-header">
        <img src={require('../antlers.png')} alt="antlers"/>
          <h1 className='welcome'>Welcome to</h1>
            <h1 className="holidayTitle">Holiday Hub!</h1>
        </header>
        <div className='homeDiv'>
        <p className='homeBody'>
          Let's face it, you may know the truth about Santa Claus but that doesn't mean you aren't circling those catalogs and filling your online shopping bag to drop hints to family, friends, significant others... </p>
          <p className='homeBody'>Organize the whole family's wish lists in one place with Holiday Hub!</p>
        </div>
        <div className='btnDiv'>
          <button className='loginBtn' onClick={this.props.toggleLogin}>login</button>
          <button className='loginBtn'>create account</button>
        </div>
      </div>
    )
  }
}
