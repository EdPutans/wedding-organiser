import React from 'react';
import { PropTypes } from 'prop-types';
import { Menu, Edit, CheckCircleOutline, Cancel, ChevronRight } from '@material-ui/icons';
import ClickableDiv from '../ClickableDiv/ClickableDiv';
import './styles.scss';

const ClickableIcon = ({ iconStyle, icon, className, onClick, rotate, color, ...props }) => {
  const getIcon = () => {
    switch (icon) {
      case 'menu':
        return <Menu {...props} fill={color} className="ClickableIcon" />;
      case 'edit':
        return <Edit {...props} fill={color} className="ClickableIcon" />;
      case 'chevron':
        return <ChevronRight {...props} fill={color} className="ClickableIcon" />;
      case 'decline':
        return <Cancel {...props} fill={color} className="ClickableIcon" />;
      case 'confirm':
      default:
        return <CheckCircleOutline {...props} fill={color} className="ClickableIcon" />;
    }
  };
  return (
    <ClickableDiv
      className={className}
      onClick={onClick}
      style={{ ...iconStyle, transform: `rotate(${rotate}deg)` }}
    >
      {getIcon()}
    </ClickableDiv>
  );
};

ClickableIcon.propTypes = {
  icon: PropTypes.oneOf(['menu', 'edit', 'decline', 'confirm', 'chevron']).isRequired,
  iconStyle: PropTypes.shape(),
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  rotate: PropTypes.number,
};
ClickableIcon.defaultProps = {
  rotate: 0,
  iconStyle: {},
  className: '',
};

export default ClickableIcon;
