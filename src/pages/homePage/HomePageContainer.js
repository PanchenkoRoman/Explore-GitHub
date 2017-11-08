import React, { Component } from 'react';
import HomePage from './HomePage';

class HomePageContainer extends Component {
  render() {
    return (
      <div className="home-page-container">
        <h1>Explore <a href='https://github.com/' className='link'>GitHub</a> repos</h1>
        <HomePage/>
      </div>
    );
  }
}

export default HomePageContainer;
