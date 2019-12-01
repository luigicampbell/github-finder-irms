import React from 'react';
import UserItem from './UserItem';
import Spinner from '../Layout/Spinner';

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
};

const UserCollection = props => {
  const { isLoading, users } = props;
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
