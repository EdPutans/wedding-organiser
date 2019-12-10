import React from 'react';
import { PropTypes } from 'prop-types';
import './styles.scss';

const ErrorMessage = ({ text }) => {
  return text ? <p className="ErrorMessage">{text}</p> : null;
};

ErrorMessage.propTypes = {
  text: PropTypes.string,
};

ErrorMessage.defaultProps = {
  text: null,
};

export default ErrorMessage;
