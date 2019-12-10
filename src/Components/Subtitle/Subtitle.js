import React from 'react';
import { PropTypes } from 'prop-types';
import './styles.scss';

const Subtitle = ({ children, color, className, regular, ...props }) => {
  return (
    <p className={`Subtitle${regular ? 'regular' : ''} ${className}`} style={{ color }} {...props}>
      {children}
    </p>
  );
};

Subtitle.propTypes = {
  regular: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  color: PropTypes.string,
};

Subtitle.defaultProps = {
  color: 'white',
  regular: false,
  className: '',
};
export default Subtitle;
