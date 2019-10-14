import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
      <div>
        <label>Weight(kg)</label>
        <input name="weight" />
      </div>

      <div>
          <label>Height(cm)</label>
          <input name="height" />
      </div>
    </div>
    );
  }
}

export default App;