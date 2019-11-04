import React from 'react';
import { PropTypes } from 'prop-types';
import './styles.scss';

const Subtitle = ({ children, color, className, ...props }) => {
  return (
    <p className={`Subtitle ${className}`} style={{ color }} {...props}>
      {children}
    </p>
  );
};

Subtitle.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  color: PropTypes.string,
};

Subtitle.defaultProps = {
  color: 'white',
  className: '',
};
export default Subtitle;
