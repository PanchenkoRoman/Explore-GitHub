import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import spinner from '../../assets/preloader2.gif'

import Navigation from './Navigation';
import Sorting from '../../utils/sorting';
import Filtering from '../../utils/filtering';
import UserInfo from '../../components/UserInfo';
import ReposCard from '../../components/ReposCard';

class ReposContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      sortBy: null,
      filterBy: null,
      filterType: null,
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

  setFilterParameter(param, e){
    this.setState({
      filterBy: param,
      initialRepos: false,
    });
    if(!param){
      this.setState({
        filterBy: e.target.value,
        initialRepos: false,
        filterType: 'language'
      })
    }
  }

  setInitialRepos(){
    this.setState({
      initialRepos: true,
      filterBy: null,
      filterType: null
    })
  }

  render() {
    let { user, repos } = this.props;
    let filteredRepos;
    let { sortBy, byOrder, filterBy, initialRepos, filterType } = this.state;

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
      filteredRepos = Filtering(repos, filterBy, filterType);
    }

    if(initialRepos || filterBy === 'all') {
      filteredRepos = repos;
    }

    let languages = _.uniqBy(filteredRepos, 'language');

    return (
      <div className="repos-container">
        <UserInfo user={ user }/>
        <Navigation filter={[this.setFilterParameter, this.setInitialRepos, languages]}
                    sortBy={sortBy}
                    filterBy={filterBy}
                    byOrder={byOrder}
                    sort={this.setSortingParameter}
        />
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
