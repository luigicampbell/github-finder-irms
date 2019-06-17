import React, { Component } from 'react';
import Navbar from './components/Layout/Navbar';
import UserCollection from './components/User/UserCollection';
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    console.log('CONSTRUCTOR IS CALLED or EXECUTED or INVOKED');
  }
  
  componentWillMount() {
    console.log('COMPONENT HAS NOT MOUNTED BUT IS ABOUT TO');
  }

  render() {
    console.log('RENDER WILL PAINT THE COMPONENT AND CHILDREN');
    return (
      <div className="App">
        <Navbar title={"Github Frindr"} iconClass={"fab fa-github"} />
        <div className="container">
          <UserCollection />
        </div>
      </div>
    );
  }

  componentDidMount() {
    console.log('COMPONENT MOUNTED SUCCESSFULLY WITHOUT FATAL ERROR');
  }
}
