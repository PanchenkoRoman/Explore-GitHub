import React, { Component } from 'react';
import { connect } from 'react-redux';

class ReposContainer extends Component {
  constructor(props){
    super(props);

    this.state = {

    };

    // bind methods

  }

  render() {
    console.log(this.props, this.state);
    return (
      <div className="repos-container">
        <h1>Repos</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.data
});

export default connect(mapStateToProps)(ReposContainer);
