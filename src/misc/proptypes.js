/* eslint-disable import/prefer-default-export */
import { PropTypes } from 'prop-types';

export const historyProps = PropTypes.shape({
  push: PropTypes.func.isRequired,
  location: PropTypes.string.isRequired,
});

export const styleProps = PropTypes.shape({
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  fill: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  flex: PropTypes.number,
});
export const routeProps = PropTypes.shape({
  path: PropTypes.string.isRequired,
  component: PropTypes.node,
  title: PropTypes.string.isRequired,
  endpoint: PropTypes.string,
  props: PropTypes.shape(),
});
