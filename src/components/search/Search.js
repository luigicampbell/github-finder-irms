import React, { useState } from 'react';

const Search = ({ searchUsers, showClearUsersButton, clearUsers, setAlert }) => {
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

  } 

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
        {showClearUsersButton && (
          <button 
            className="btn btn-light btn-block"
            onClick={clearUsers}
          >Clear</button>
        )}
      </div>
    );
}

export default Search;
