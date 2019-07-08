import React from 'react';

const User = props => {
  const { login, avatar_url, html_url } = props.user;
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
          <a 
            href={html_url} 
            alt="link to user profile"
            className="btn btn-dark btn-sm my-l"
            >
              More
          </a>
        </div>
    </div>
  );
}

export default User;
