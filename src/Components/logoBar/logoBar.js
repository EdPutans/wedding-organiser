import React from 'react';
import './styles.scss';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getIsMobile } from '../../redux/mainPage/selectors';
import ClickableDiv from '../ClickableDiv/ClickableDiv';
import { routes } from '../../routes';
import ClickableIcon from '../ClickableIcon/ClickableIcon';

const LogoBar = ({ isMobile, history, onBurger }) => {
  return !isMobile ? (
    <ClickableDiv className="LogoBar" onClick={() => history.push(routes.main.path)}>
      <p className="LogoBar_logoText">Happily Ever After</p>
    </ClickableDiv>
  ) : (
    <div className="MobileLogoBar_container">
      <ClickableIcon onClick={() => onBurger()} icon="menu" className="MobileLogoBar_icon" />
      <ClickableDiv className="MobileLogoBar" onClick={() => history.push(routes.main.path)}>
        <p className="MobileLogoBar_text">HEA</p>
      </ClickableDiv>
    </div>
  );
};

LogoBar.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isMobile: getIsMobile(state),
});
export default withRouter(connect(mapStateToProps)(LogoBar));
