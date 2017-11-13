import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
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
      filterBy: null,
      byOrder: true,
      initialRepos: true
    };

    // bind methods
    this.setSortingParameter = ::this.setSortingParameter
    this.setFilterParameter = ::this.setFilterParameter
    this.setInitialRepos = ::this.setInitialRepos
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

  setFilterParameter(param){
    this.setState({
      filterBy: param,
      initialRepos: false
    })
  }

  setInitialRepos(){
    this.setState({
      initialRepos: true
    })
  }

  render() {
    let { user, repos } = this.props;
    let filteredRepos;
    let { sortBy, byOrder, filterBy, initialRepos } = this.state;

    if(!repos){
      return(
        <div className="home-page-container">
          <img src={spinner} alt="preloader"/>
        </div>
      )
    }

    if(sortBy){
      repos = Sorting(repos, sortBy, byOrder);
    }

    if(filterBy){
      filteredRepos = _.filter(repos, [filterBy, true])
    }

    if(initialRepos) {
      filteredRepos = repos;
    }

    console.log(filteredRepos);
    return (
      <div className="repos-container">
        <UserInfo user={ user }/>
        <button onClick={() => this.setFilterParameter('fork')}>fork</button>
        <button onClick={() => this.setInitialRepos()}>all</button>
        <Navigation sortBy={sortBy} byOrder={byOrder} sort={this.setSortingParameter}/>
        <div className='card-container'>
          {
            filteredRepos.map((item) =>(
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
