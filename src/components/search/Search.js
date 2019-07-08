import React, { Component } from 'react';

export default class Search extends Component {
  state = {
    searchText: ''
  };

  onChange = event => {
    console.log('I have triggered an event');
    const { name, value } = event.target;
    console.log('the event stores the object whose value has changed:', event.target);
    console.log('the name of the object that has changed:',name,'\n','the value of the object that has changed:', value);
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
