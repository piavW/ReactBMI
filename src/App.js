import React, { Component } from 'react';
import DisplayResult from './Components/displayResult';
import {Card, Container} from 'semantic-ui-react';

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
      method: event.target.name
    })
  }

  render() {
    return (
     <Container textAlign='center'>
      <Card>
      <h1>BMI Converter</h1>
        <select id="method">
          <option name="metric" method={this.state.method} onClick={this.changeMethod}>metric</option>
          <option name="imperial" method={this.state.method} onClick={this.changeMethod}>imperial</option>
        </select>
        <div>
          <label>Weight(kg)</label>
          <input name="weight" value={this.state.weight} onChange={ (e) => this.setState({ weight: e.target.value })} />
        </div>
        <div>
            <label>Height(cm)</label>
            <input name="height" value={this.state.height} onChange={ (e) => this.setState({ height: e.target.value })}/>
        </div>

				<DisplayResult 
					weight={this.state.weight}
					height={this.state.height}
				/>
        </Card>
      </Container>

    );
  }
}

export default App;