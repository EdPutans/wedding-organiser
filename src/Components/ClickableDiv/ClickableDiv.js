import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const ClickableDiv = ({ onClick, className, disabled, children, ...rest }) => (
  <div
    tabIndex={0}
    onClick={!disabled ? onClick : undefined}
    onKeyDown={e => {
      if ((e.keyCode === 13 || e.keyCode === 32) && !disabled) {
        onClick();
      }
    }}
    className={`${className} ClickableDiv${disabled ? '_disabled' : ''}`}
    role="button"
    {...rest}
  >
    {children}
  </div>
);

ClickableDiv.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
  disabled: PropTypes.bool,
};

ClickableDiv.defaultProps = {
  className: '',
  children: null,
  disabled: false,
};

export default ClickableDiv;
