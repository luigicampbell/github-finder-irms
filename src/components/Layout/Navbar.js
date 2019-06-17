import React, { Component } from 'react';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar bg-primary">
        <h1>
          <i className={this.props.iconClass} /> {this.props.title}
        </h1>
      </nav>
    );
  }
}
