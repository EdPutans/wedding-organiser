import React from 'react';
import { PropTypes } from 'prop-types';
import './styles.scss';

const Title = ({ children, color, className, ...props }) => {
  return (
    <div className={`Title ${className}`} style={{ color }} {...props}>
      {children}
    </div>
  );
};

Title.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  className: PropTypes.string,
};

Title.defaultProps = {
  color: 'white',
  className: '',
};
export default Title;
