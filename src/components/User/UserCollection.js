import React, { Component } from 'react';
import User from './User';

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
};

export default class UserCollection extends Component {
  state = {
    users: [
      {
        id: 'id',
        login: 'mojombo',
        avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
        html_url: 'https://github.com/mojombo'
      },
      {
        login: 'defunkt',
        id: 2,
        avatar_url: 'https://avatars0.githubusercontent.com/u/2?v=4',
        html_url: 'https://github.com/defunkt',
      },
      {
          login: 'pjhyett',
          id: 3,
          avatar_url: 'https://avatars0.githubusercontent.com/u/3?v=4',
          html_url: 'https://github.com/pjhyett',
      }
    ]
  };

  render() {
    return (
      <div style={userStyle}>
        {
          this.state.users.map(
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
}

