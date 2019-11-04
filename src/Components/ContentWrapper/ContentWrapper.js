import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../Sidebar/Sidebar';
import LogoBar from '../logoBar/logoBar';
import { routes } from '../../routes';
import './app.scss';

const ContentWrapper = ({ children, isMobile }) => {
  const [mobileSidebarOpen, setMobileBarOpen] = React.useState(false);
  const content = (
    <React.Fragment>
      <LogoBar onBurger={() => setMobileBarOpen(true)} />
      <Sidebar
        open={mobileSidebarOpen}
        close={() => setMobileBarOpen(false)}
        routes={Object.keys(routes.main.subRoutes).map(r => routes.main.subRoutes[r])}
      />
      {!isMobile ? <div className="App_inner">{children}</div> : children}
    </React.Fragment>
  );
  return !isMobile ? <div className="App">{content}</div> : content;
};

ContentWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  isMobile: PropTypes.bool.isRequired,
};

export default ContentWrapper;
