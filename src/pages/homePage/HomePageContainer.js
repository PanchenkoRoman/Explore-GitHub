import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getDataRepos } from '../../actions';
import HomePage from './HomePage';

class HomePageContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      owner: null
    };

    // bind methods
    this.onCahgeHandle = ::this.onCahgeHandle;
    this.getRepos = ::this.getRepos;
  }

  componentWillReceiveProps(newProps){
    const { data, history } = this.props;
    if(data) history.push('/repos')
  }

  onCahgeHandle(event){
    this.setState({
      owner: event.target.value
    })
  }

  getRepos(event){
    event.preventDefault();
    let { owner } = this.state;

    if(owner) this.props.getDataRepos(owner);
  }

  render() {
    console.log(this.props.data);
    return (
      <div className="home-page-container">
        <h1>Explore <a href='https://github.com/' className='link'>GitHub</a> repos</h1>
        <HomePage getRepos={ this.getRepos } onCahgeHandle={ this.onCahgeHandle } />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.data
});

export default connect(mapStateToProps, {getDataRepos})(HomePageContainer);
