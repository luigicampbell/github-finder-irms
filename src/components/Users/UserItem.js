import React from 'react';
import { Link } from 'react-router-dom';

const UserItem = props => {
  const { login, avatar_url } = props.userItem;
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt="profile pic"
        className="round-img"
        style={{ width: '60px' }}
      />
        <h3>{login}</h3>
        <div>
          <Link 
            to={`/user/${login}`} 
            alt="link to user profile"
            className="btn btn-dark btn-sm my-l"
            >
              More
          </Link>
        </div>
    </div>
  );
}

export default UserItem;
