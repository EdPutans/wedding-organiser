import React from 'react';
// import { PropTypes } from 'prop-types';
import './styles.scss';

const LoggedOutWrapper = ({ children }) => {
  return (
    <div className="LoggedOutWrapper">
      {/* <h1 className="LoggedOutWrapper_HEA_header">Happilly ever after</h1> */}
      <div className="LoggedOutWrapper_inner">{children}</div>
    </div>
  );
};

LoggedOutWrapper.propTypes = {};
LoggedOutWrapper.defaultProps = {};

export default LoggedOutWrapper;
