import React, { PureComponent } from 'react';

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
    const Arrows = (param) =>{
      return(
        <span>
        {
          param
          ? <i className="fa fa-chevron-down" />
          : <i className="fa fa-chevron-up" />
        }
        </span>
      )
    };

    return(
      <div className='nav'>
        <div className='nav-block'>
          <span className='tab' onClick={ () => this.showPanel('sorting')}>Sorting by
            {Arrows(sorting)}
          </span>
        </div>
      </div>
    )
  }

}

export default Navigation;