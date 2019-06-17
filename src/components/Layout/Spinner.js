import React, { Fragment } from 'react';
import spinner from '../../assets/spinner.gif';

const spinnerStyle = {
  display: 'block',
  margin: 'auto',
  width: '200px'
};

const Spinner = () => {
  return (
    <Fragment>
      <img src={spinner} alt="loading..." style={spinnerStyle}/>
    </Fragment>
  );
}

export default Spinner;
