import React, { PureComponent } from 'react';
import Arrows from '../../components/Arrows';

class Navigation extends PureComponent {
  constructor(props){
    super(props);

    this.state = {
      sorting: false,
      filtering: false
    };

    // bind methods
    this.showPanel = ::this.showPanel
  }

  showPanel(param){
    if(param === 'sorting'){
      this.setState({
        sorting: !this.state.sorting
      })
    }else if(param === 'filtering'){
      this.setState({
        filtering: !this.state.filtering
      })
    }
  }

  render(){
    const { sorting, filtering } = this.state;
    const { sort, byOrder, sortBy } =this.props;

    return(
      <div className='nav'>
        <div className='nav-block'>
          <span className='tab' onClick={ () => this.showPanel('sorting')}>Sorting by
            {Arrows(sorting)}
          </span>
          {
            sorting
            ? <ul className='sort-filter'>
                <li className='sort-item' onClick={() => sort('name')}>Repo name
                  { sortBy === 'name' ? Arrows(byOrder) : '' }</li>
                <li className='sort-item' onClick={() => sort('stargazers_count')}>Stars count
                  { sortBy === 'stargazers_count' ? Arrows(byOrder) : '' }</li>
                <li className='sort-item' onClick={() => sort('open_issues_count')}>Open issues
                  { sortBy === 'open_issues_count' ? Arrows(byOrder) : '' }</li>
                <li className='sort-item' onClick={() => sort('created_at')}>Created date
                  { sortBy === 'created_at' ? Arrows(byOrder) : '' }</li>
              </ul>
            : ''
          }
        </div>
      </div>
    )
  }

}

export default Navigation;