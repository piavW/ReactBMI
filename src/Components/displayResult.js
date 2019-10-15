import React, { Component } from 'react';
import { bmiCalculation } from '../Modules/BMICalculator';

class DisplayResult extends Component {
  calculate(){
    var weight= this.props.weight;
    var height= this.props.height;
    var method = this.props.method;

    return bmiCalculation(weight, height, method);
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