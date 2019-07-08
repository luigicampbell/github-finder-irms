import React, { Component } from 'react';
import Navbar from './components/Layout/Navbar';
import Search from './components/search/Search';
import UserCollection from './components/User/UserCollection';
import './App.css';

const { CLIENT_ID, CLIENT_SECRET } = process.env;

export default class App extends Component {
  state = {
    users: [],
    isLoading: false
  }

  render() {
    const { isLoading, users } = this.state;
    return (
      <div className="App">
        <Navbar title={"Github Frindr"} iconClass={"fab fa-github"} />
        <div className="container">
          <Search searchUsers={this.searchUsers} />
          <UserCollection isLoading={isLoading} users={users}/>
        </div>
      </div>
    );
  }

  fetchUsers = async searchText => {
    this.setState(
      {
        isLoading: true
      }
    );
    
    const url = `https://api.github.com/search/users?q=${searchText}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
    const data = await fetch(url);
    const res = await data.json();
    const users = res.items;

    this.setState(
      {
        users: users,
        isLoading: false 
      }
    );
   }

  searchUsers = async searchText => {
    this.fetchUsers(searchText);
  }
}
