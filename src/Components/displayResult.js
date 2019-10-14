import React, { Component } from 'react';

class DisplayResult extends Component {
  calculate(){
    var weight= this.props.weight;
    var height= this.props.height;
  }
  render(){
    return(
      <div id='response'>
        {this.calculate()}
      </div>
    )
  }
}

export default DisplayResult