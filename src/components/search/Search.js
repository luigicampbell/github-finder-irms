import React, { Component } from 'react';

export default class Search extends Component {
  state = {
    searchText: ''
  };

  onChange = event => {
    const { name, value } = event.target;

    this.setState(
      {
        [name]: value
      }
    );
  }

  onSubmit = event => {
    event.preventDefault();

  } 

  render() {
    return (
      <div>
        <form className="form">
          <input 
           type="text" 
           name="searchText"
           placeholder="Search users..."
           value={this.state.searchText} 
           onChange={this.onChange}
           onSubmit={this.onSubmit}
          />
           <input 
            type="submit"
            value="search"
            className="btn btn-dark btn-block"
          />

        </form>
      </div>
    );
  }
}
