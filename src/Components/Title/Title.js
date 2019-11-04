import React from 'react';
import { PropTypes } from 'prop-types';
import './styles.scss';

const Title = ({ children, color }) => {
  return (
    <div className="Title" style={{ color }}>
      {children}
    </div>
  );
};

Title.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
};

Title.defaultProps = {
  color: 'white',
};
export default Title;
