import React, { useContext } from 'react';
import RepoItem from './RepoItem';
import GithubContext from '../../context/github/githubContext';

const Repos = () => {
  const { repos } = useContext(GithubContext);
  return repos.map(r => <RepoItem repo={r} key={r.id} />);
}

export default Repos;
