import React from 'react';
import { PropTypes } from 'prop-types';
import {
  Menu,
  Edit,
  CheckCircleOutline,
  Cancel,
  ChevronRight,
  Favorite,
  Delete,
  FavoriteBorder,
} from '@material-ui/icons';
import ClickableDiv from '../ClickableDiv/ClickableDiv';
import './styles.scss';
import { styleProps } from '../../misc/proptypes';

const ClickableIcon = ({
  divStyle,
  icon,
  className,
  onClick,
  rotate,
  color,
  style,
  size,
  ...props
}) => {
  const getIcon = () => {
    switch (icon) {
      case 'menu':
        return (
          <Menu
            {...props}
            style={{ ...style, fill: color, transform: `rotate(${rotate}deg)` }}
            className="ClickableIcon"
          />
        );
      case 'delete':
        return (
          <Delete
            {...props}
            style={{ ...style, fill: color, transform: `rotate(${rotate}deg)` }}
            className="ClickableIcon"
          />
        );
      case 'edit':
        return (
          <Edit
            {...props}
            style={{ ...style, fill: color, transform: `rotate(${rotate}deg)` }}
            className="ClickableIcon"
          />
        );
      case 'chevron':
        return (
          <ChevronRight
            {...props}
            style={{ ...style, fill: color, transform: `rotate(${rotate}deg)` }}
            className="ClickableIcon"
          />
        );
      case 'decline':
        return (
          <Cancel
            {...props}
            style={{ ...style, fill: color, transform: `rotate(${rotate}deg)` }}
            className="ClickableIcon"
          />
        );
      case 'fav_on':
        return (
          <Favorite
            {...props}
            style={{ ...style, fill: color, transform: `rotate(${rotate}deg)` }}
            className="ClickableIcon"
          />
        );
      case 'fav_off':
        return (
          <FavoriteBorder
            {...props}
            style={{ ...style, fill: color, transform: `rotate(${rotate}deg)` }}
            className="ClickableIcon"
          />
        );
      case 'confirm':
      default:
        return (
          <CheckCircleOutline
            {...props}
            style={{ ...style, fill: color }}
            className="ClickableIcon"
          />
        );
    }
  };
  return (
    <ClickableDiv
      className={className}
      onClick={onClick}
      style={{ ...divStyle, height: `${size}px`, width: `${size}px` }}
    >
      {getIcon()}
    </ClickableDiv>
  );
};

ClickableIcon.propTypes = {
  icon: PropTypes.oneOf([
    'menu',
    'edit',
    'decline',
    'confirm',
    'chevron',
    'fav_on',
    'fav_off',
    'delete',
  ]).isRequired,
  divStyle: PropTypes.shape(),
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  rotate: PropTypes.number,
  color: PropTypes.string,
  style: styleProps,
  size: PropTypes.number,
};
ClickableIcon.defaultProps = {
  size: 20,
  rotate: 0,
  divStyle: {},
  className: '',
  color: '',
  style: {},
};

export default ClickableIcon;
