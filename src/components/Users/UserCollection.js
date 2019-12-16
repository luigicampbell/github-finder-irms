import React, { useContext } from 'react';
import UserItem from './UserItem';
import Spinner from '../Layout/Spinner';
import GithubContext from '../../context/github/githubContext';

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
};

const UserCollection = () => {
  const { isLoading, users } = useContext(GithubContext);
  
  return isLoading ? <Spinner /> : (
    <div style={userStyle}>
      {
        users.map(
          userItem => (
            <UserItem 
              key={userItem.id} 
              userItem={userItem} 
            />
          )
        )
      }
    </div>
  );
}

export default UserCollection;
