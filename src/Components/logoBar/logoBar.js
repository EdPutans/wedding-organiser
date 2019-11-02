import React from 'react';
import './styles.scss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getIsMobile } from '../../redux/mainPage/selectors';

const LogoBar = ({ isMobile }) => {
  return !isMobile ? (
    <div className="LogoBar">
      <div className="LogoBar_logoText">Happily Ever After</div>
    </div>
  ) : (
    <div className="MobileLogoBar">
      <p className="MobileLogoBar_text">HEA</p>
    </div>
  );
};

LogoBar.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isMobile: getIsMobile(state),
});
export default connect(mapStateToProps)(LogoBar);
