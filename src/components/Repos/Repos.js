import React from 'react';
import RepoItem from './RepoItem';

const Repos = ({ repos }) => {
  return repos.map(r => <RepoItem repo={r} key={r.id} />);
}

export default Repos;
