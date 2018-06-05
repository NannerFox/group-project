import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = { test: [] }

  componentDidMount() {
    fetch('/test')
    .then(res => res.json())
    .then(test => this.setState({ test }))
  }

  render() {
    return (
      <div className="App">
        <h1 className="App-intro">
          <ul>
            {this.state.test.map(item =>
              <li key={item.id}>{item.name}</li>
            )}
          </ul>
        </h1>
      </div>
    );
  }
}

export default App;
