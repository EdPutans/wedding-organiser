/* eslint-disable import/prefer-default-export */
import { PropTypes } from 'prop-types';

export const historyProps = {
  push: PropTypes.func.isRequired,
  location: PropTypes.string.isRequired,
};

export const styleProps = {
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  fill: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  flex: PropTypes.number,
};
