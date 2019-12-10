import React from 'react';
import { PropTypes } from 'prop-types';
import './styles.scss';
import { Input } from '@material-ui/core';

const LabelledInput = ({
  placeholder,
  name,
  onChange,
  className,
  inputClassName,
  children,
  ...props
}) => {
  return (
    <div className={className}>
      <p className={`LabelledInput_name ${inputClassName}`}>{placeholder || name}</p>
      {children || (
        <Input
          onChange={e => onChange(e.target.value, name)}
          className="LabelledInput_input"
          {...props}
        />
      )}
    </div>
  );
};

LabelledInput.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
  inputClassName: PropTypes.string,
  children: PropTypes.node,
};

LabelledInput.defaultProps = {
  className: '',
  placeholder: '',
  name: '',
  onChange: () => {},
  inputClassName: '',
  children: null,
};
export default LabelledInput;
