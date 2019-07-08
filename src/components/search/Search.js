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
    this.props.searchUsers(this.state.searchText);
    this.setState({ searchText: '' })

  } 

  render() {
    return (
      <div>
        <form 
          className="form"
          onSubmit={this.onSubmit}
        >
          <input 
           type="text" 
           name="searchText"
           placeholder="Search users..."
           value={this.state.searchText} 
           onChange={this.onChange}
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
