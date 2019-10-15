import React, { Component } from 'react';
import DisplayResult from './Components/DisplayResult';
import { Container } from 'semantic-ui-react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: '',
      height: '',
      method: 'metric'
    }
  }
   changeMethod = (event) => {
    this.setState({
      method: event.target.value
    })
  }
  
  render() {
    return (
     <Container textAlign='center'>
      <h1>BMI Converter</h1>
        <select id="method"  method={this.state.method} onChange={this.changeMethod}>
          <option value="metric">metric</option>
          <option value="imperial">imperial</option>
        </select>
        <div>
          <label>Weight {this.state.method === 'metric' ? '(kg)' : '(lbs)'}</label>
          <input name="weight" value={this.state.weight} onChange={ (e) => this.setState({ weight: e.target.value })} />
        </div>
        <div>
            <label>Height {this.state.method === 'metric' ? '(cm)' : '(inches)'}</label>
            <input name="height" value={this.state.height} onChange={ (e) => this.setState({ height: e.target.value })}/>
        </div>

				<DisplayResult 
					weight={this.state.weight}
          height={this.state.height}
          method={this.state.method}
				/>
      </Container>

    );
  }
}

export default App;