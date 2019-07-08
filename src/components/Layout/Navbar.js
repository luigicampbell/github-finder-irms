import React from 'react';

const Navbar = props => {
  const { iconClass, title } = props;
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={iconClass} /> {title}
      </h1>
    </nav>
  );
}

export default Navbar;
