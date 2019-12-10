import React from 'react';
import { PropTypes } from 'prop-types';
import './styles.scss';
import Subtitle from '../Subtitle/Subtitle';

const StatTile = ({ title, value, borderColor, backgroundColor, textColor }) => {
  return (
    <div
      className="StatTile"
      style={{
        backgroundColor,
        borderColor: borderColor || backgroundColor,
      }}
    >
      <Subtitle className="StatTile_title" style={{ color: textColor }}>
        {title}
      </Subtitle>
      <Subtitle regular className="StatTile_value" style={{ color: textColor }}>
        {value}
      </Subtitle>
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
