import React from 'react';
import { PropTypes } from 'prop-types';
import './styles.scss';

const StatTile = ({ title, value, borderColor, backgroundColor, textColor }) => {
  return (
    <div
      className="StatTile"
      style={{
        backgroundColor,
        borderColor: borderColor || backgroundColor,
      }}
    >
      <h2 className="StatTile_title Fancy" style={{ color: textColor }}>
        {title}
      </h2>
      <h3 className="StatTile_value Fancy" style={{ color: textColor }}>
        {value}
      </h3>
    </div>
  );
};

StatTile.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  borderColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
};

StatTile.defaultProps = {
  borderColor: undefined,
  backgroundColor: undefined,
  textColor: undefined,
};
export default StatTile;
