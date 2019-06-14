import React, { Component } from 'react';
import Navbar from './components/Navbar';
import './App.css';

export default class App extends Component {
  render() {
    
    return (
      <div className="App">
        <Navbar title={"Github Frindr"} iconClass={"fab fa-github"} />
      </div>
    );
  }
}
