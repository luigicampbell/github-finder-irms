import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
  const { 
    users, 
    clearUsers, 
    searchUsers, 
  } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);
  const [searchText, setSearchText] = useState('');

  const onChange = event =>  setSearchText(event.target.value);

  const onSubmit = event => {
    event.preventDefault();
    if(searchText === '') {
      setAlert('Please enter something', 'light');
    } else {
      searchUsers(searchText);
      setSearchText('');
    }

  };

   return (
      <div>
        <form 
          className="form"
          onSubmit={onSubmit}
        >
          <input 
           type="text" 
           name="searchText"
           placeholder="Search users..."
           value={searchText} 
           onChange={onChange}
          />
           <input 
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />

        </form>
        {users.length > 0 && (
          <button 
            className="btn btn-light btn-block"
            onClick={clearUsers}
          >Clear</button>
        )}
      </div>
    );
}

export default Search;
