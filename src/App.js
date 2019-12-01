import React, { Component } from 'react';
import About from "./components/Pages/About";
import Alert from './components/Layout/Alert';
import Navbar from './components/Layout/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Search from './components/Search/Search';
import User from './components/Users/User';
import UserCollection from './components/Users/UserCollection';
import './App.css';

const { CLIENT_ID, CLIENT_SECRET } = process.env;

export default class App extends Component {
  state = {
    users: [],
    user: {},
    repos: [],
    isLoading: false,
    alert: null
  }

  clearUsers = () => this.setState({ users:[], isLoading:false });
  setAlert = (message,type) => {
    this.setState({ alert: { message, type } });
    setTimeout(() => this.setState({ alert:null }), 1500);
  } 

  render() {
    const { isLoading, users, user, repos } = this.state;
    return (
      <Router>
        <div className="App">
          <Navbar 
            title={"Github Frindr"} 
            iconClass={"fab fa-github"} 
          />
          <div className="container">
            <Alert alert={this.state.alert}/>
            <Switch>
              <Route exact path='/' render={props => (
                <>
                  <Search 
                    searchUsers={this.searchUsers} 
                    clearUsers={this.clearUsers}
                    showClearUsersButton={ users.length > 0}
                    setAlert={this.setAlert} 
                  />
                  <UserCollection 
                    isLoading={isLoading} 
                    users={users}
                  />
                </>
              )} />
              <Route exact path='/about' component={About} />
              <Route exact path='/user/:login' render={props => (
                <User {...props } 
                  getUser={this.getUser} 
                  getUserRepos={this.getUserRepos}
                  user={user}
                  repos={repos}
                  isLoading={isLoading}
                />
              )} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
// TODO: refactor into two methods, one builds URL the other calls api
// TODO: catch errors
  searchUsers = async searchText => {
    this.setState({ isLoading: true });
    
    const url = `https://api.github.com/search/users?q=${searchText}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
    const res = await fetch(url);
    const data = await res.json();
    const users = data.items;

    this.setState(
      {
        users: users,
        isLoading: false 
      }
    );
  }

  getUser = async username => {
    this.setState({ isLoading: true });
  
    const url = `https://api.github.com/users/${username}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
    const data = await fetch(url);
    const user = await data.json();
    const isLoading = false;
    
    this.setState({ user, isLoading });
  }

  getUserRepos = async username => {
    this.setState({ isLoading: true });
    const url = `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;

    const data = await fetch(url);
    const repos = await data.json();
    const isLoading = false;
    
    this.setState({ repos, isLoading });   
  }
  
}
