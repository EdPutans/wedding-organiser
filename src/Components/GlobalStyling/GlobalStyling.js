import { React } from 'react';
import { PropTypes } from 'prop-types';

const GlobalStyling = ({ children }) => {
  return <div className="GlobalStyling">{children}</div>;
};

GlobalStyling.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalStyling;
