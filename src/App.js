import React, { Component } from 'react';
import Navbar from './components/Layout/Navbar';
import UserCollection from './components/User/UserCollection';
import './App.css';

export default class App extends Component {
  state = {
    users: [],
    isLoading: true
  }

  constructor() {
    super();
    console.log('CONSTRUCTOR IS CALLED or EXECUTED or INVOKED');
  }
  
  componentWillMount() {
    console.log('COMPONENT HAS NOT MOUNTED BUT IS ABOUT TO');
  }

  render() {
    console.log('RENDER WILL PAINT THE COMPONENT AND CHILDREN');
    const { isLoading, users } = this.state;
    return (
      <div className="App">
        <Navbar title={"Github Frindr"} iconClass={"fab fa-github"} />
        <div className="container">
          <UserCollection isLoading={isLoading} users={users}/>
        </div>
      </div>
    );
  }

  componentDidMount() {
    console.log('COMPONENT MOUNTED SUCCESSFULLY WITHOUT FATAL ERROR');
    console.log('MAKE REQUESTS HERE');
    this.fetchUsers();
  }

  fetchUsers = async () => {
    const data = await fetch('https://api.github.com/users');
    const users = await data.json();
    this.setState(
      {
        users: users,
        isLoading: false 
      }
    );
    console.log(users);
  }
}
