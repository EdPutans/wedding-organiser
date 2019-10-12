/* eslint-disable import/prefer-default-export */
import { PropTypes } from 'prop-types';

export const historyProps = {
  push: PropTypes.func.isRequired,
  location: PropTypes.string.isRequired,
};
