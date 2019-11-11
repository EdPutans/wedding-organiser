import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import { styleProps } from '../../misc/proptypes';

const TextArea = ({ value, style, className, onChange, rows, maxLength, placeholder }) => {
  return (
    <textarea
      className={`TextArea ${className}`}
      style={style}
      placeholder={placeholder}
      rows={rows}
      maxLength={maxLength}
      onChange={e => onChange(e)}
      value={value}
    />
  );
};

TextArea.propTypes = {
  value: PropTypes.string.isRequired,
  style: styleProps,
  className: PropTypes.string,
  onChange: PropTypes.func,
  rows: PropTypes.number,
};
TextArea.defaultProps = {
  style: {},
  rows: 7,
  className: '',
  onChange: () => {},
};

export default TextArea;
