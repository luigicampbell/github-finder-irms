import React from 'react';
import User from './User';
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
          user => (
            <User 
              key={user.id} 
              user={user} 
              />
          )
        )
      }
    </div>
  );
}

export default UserCollection;
