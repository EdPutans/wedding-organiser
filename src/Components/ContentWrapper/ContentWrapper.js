import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../Sidebar/Sidebar';
import LogoBar from '../logoBar/logoBar';
import { routes } from '../../routes';
import './app.scss';

const ContentWrapper = ({ children, isMobile }) => {
  const content = (
    <React.Fragment>
      <LogoBar />
      <Sidebar routes={Object.keys(routes.main.subRoutes).map(r => routes.main.subRoutes[r])} />
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
