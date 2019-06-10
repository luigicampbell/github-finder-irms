import React, { Component } from 'react';
import './App.css';

class App extends Component {
  lastName = () => {
    return `Campbell`;
  }

  render() {
    const name = 'Luigi';
    return (
      <div className="App">
        <h1>
            Hello {name} {this.lastName()}
        </h1>
      </div>
    );
  }
}

export default App;
