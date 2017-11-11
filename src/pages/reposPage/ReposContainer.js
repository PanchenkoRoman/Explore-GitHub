import React, { Component } from 'react';
import { connect } from 'react-redux';
import spinner from '../../assets/preloader2.gif'

import Navigation from './Navigation';
import Sorting from '../../utils/sorting'
import UserInfo from '../../components/UserInfo';
import ReposCard from '../../components/ReposCard';

class ReposContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      sortBy: null,
      byOrder: true
    };

    // bind methods
    this.setSortingParameter = ::this.setSortingParameter
  }



  setSortingParameter(parameter){
    if(this.state.sortBy === parameter){
      this.setState({
        byOrder: !this.state.byOrder
      })
    }

    this.setState({
      sortBy: parameter,
    })
  }

  render() {
    let { user, repos } = this.props;
    let { sortBy, byOrder } = this.state;

    if(user === undefined){
      return(
        <div className="home-page-container">
          <img src={spinner} alt="preloader"/>
        </div>
      )
    }

    if(sortBy){
      repos = Sorting(repos, sortBy, byOrder);
    }
    console.log(this.state.byOrder);

    return (
      <div className="repos-container">
        <UserInfo user={ user }/>
        <button onClick={ () => this.setSortingParameter('stargazers_count')}>
          sorted by stars
        </button>
        <Navigation/>
        <hr/>
        <div className='card-container'>
          {
            repos.map((item) =>(
              <ReposCard key={item.id} repos={item} />
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
