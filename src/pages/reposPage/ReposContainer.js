import React, { Component } from 'react';
import { connect } from 'react-redux';
import spinner from '../../assets/preloader2.gif'

import UserInfo from '../../components/UserInfo';
import ReposCard from '../../components/ReposCard';

class ReposContainer extends Component {
  constructor(props){
    super(props);

    this.state = {

    };

    // bind methods

  }

  render() {
    const { user, repos } = this.props;
    if(user === undefined){
      return(
        <div className="home-page-container">
          <img src={spinner} alt="preloader"/>
        </div>
      )
    }
    return (
      <div className="repos-container">
        <UserInfo user={ user }/>
        <hr/>
        <div className='card-container'>
          {
            repos.map((item) =>(
              <ReposCard repos={item} />
            ))
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.data.user,
  repos: state.data.repos
});

export default connect(mapStateToProps)(ReposContainer);
