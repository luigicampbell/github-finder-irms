import React, { Component,  } from 'react';
import Repos from '../Repos/Repos';
import Spinner from '../Layout/Spinner';
import { Link } from 'react-router-dom';
export class User extends Component {
  componentDidMount() {
    const param = this.props.match.params.login;
    this.props.getUser(param);
    this.props.getUserRepos(param);
  }

  render() {
    const { 
      avatar_url, 
      bio,
      blog,
      company,
      followers,
      following,
      hireable,
      html_url, 
      location, 
      login,
      name,
      public_repos,
      public_gists,
      website 
    } = this.props.user;
    const { isLoading, repos } = this.props;
    return isLoading ? <Spinner /> : (
      <>
        <Link to='/' className='btn btn-light'>
          Back
        </Link>
        Hireable: { hireable ? 
          <i className="fas fa-check text-success" /> :
          <i className="fas fa-times-circle text-danger" />
        }
        <div className="card grid-2">
          <div className="all-center">
            <img 
              src={avatar_url}
              className="round-img"
              alt="profile pic"
              style={{width: '150px'}}
            />
            <h1>
              { name ? name : login }
            </h1>
            <p>Location: {location}</p>
          </div>
          <div>
            { bio && (
              <>
                <h3>Bio</h3>
                <p>{bio}</p>
              </>
            )}
            <a href={html_url} className="btn btn-dark my-1">Profile</a>
            <ul>
              <li>
                { login && 
                  <>
                    <strong>Username: </strong> {login}
                  </>
                }
              </li>
              <li>
                { company && 
                  <>
                    <strong>Company: </strong> {company}
                  </>
                }
              </li>
              <li>
                { blog && 
                  <>
                    <strong>Blog: </strong> {blog}
                  </>
                }
              </li>
              <li>
                { website && 
                  <>
                    <strong>Website: </strong> {website}
                  </>
                }
              </li>
            </ul>
          </div>
        </div>
        <div className="card text-center">
          <div className="badge badge-dark">
            Followers: {followers}
          </div>
          <div className="badge badge-light">
            Following: {following}
          </div>
          <div className="badge badge-success">
            Public Repos: {public_repos}
          </div>
          <div className="badge badge-light">
            Public Gists: {public_gists}
          </div>
        </div>
        <Repos repos={repos} />
      </>
    );
  }
}

export default User;
