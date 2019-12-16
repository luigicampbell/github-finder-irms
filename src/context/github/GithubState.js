import React, { useReducer } from 'react';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
  SEARCH_USERS,
  GET_USER,
  GET_REPOS,
  CLEAR_USERS,
  SET_ISLOADING,
} from '../types.js'

const { CLIENT_ID, CLIENT_SECRET } = process.env;
const GithubState = props => {
  const initialState = {
    user: {},
    users: [],
    repos: [],
    isLoading: false
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Search Users
  const searchUsers = async searchText => {
    setIsLoading();
    
    const url = `https://api.github.com/search/users?q=${searchText}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
    const res = await fetch(url);
    const data = await res.json();
    const users = data.items;

    dispatch({
      type: SEARCH_USERS,
      payload: users
     });

  }
  // Get User
  const getUser = async username => {
    setIsLoading();
    const url = `https://api.github.com/users/${username}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
    const data = await fetch(url);
    const user = await data.json();
    
    dispatch({
      type: GET_USER,
      payload: user
    });
  };

  // Get Repos
  const getUserRepos = async username => {
    setIsLoading();
    const url = `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
    const data = await fetch(url);
    const repos = await data.json();
    
    dispatch({
      type: GET_REPOS,
      payload: repos
    });
  };

  // Clear Users
  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  // Set Loading
  const setIsLoading = () => dispatch({ type: SET_ISLOADING });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        isLoading: state.isLoading,
        getUser,
        getUserRepos,
        clearUsers,
        searchUsers,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
