import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../Sidebar/Sidebar';
import LogoBar from '../logoBar/logoBar';
import './app.scss';

const ContentWrapper = ({ children, isMobile }) => {
  const [mobileSidebarOpen, setMobileBarOpen] = React.useState(false);

  return (
    <React.Fragment>
      <LogoBar onClickBurger={() => setMobileBarOpen(true)} isMobile={isMobile} />
      <Sidebar open={mobileSidebarOpen} close={() => setMobileBarOpen(false)} />
      <div className="App">{children}</div>
    </React.Fragment>
  );
};

ContentWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  isMobile: PropTypes.bool.isRequired,
};

export default ContentWrapper;
