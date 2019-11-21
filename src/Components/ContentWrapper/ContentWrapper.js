import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../Sidebar/Sidebar';
import LogoBar from '../logoBar/logoBar';
import { routes, permaRoutes } from '../../routes';
import './app.scss';
import ClickableIcon from '../ClickableIcon/ClickableIcon';
import colors from '../../colors.scss';

const ContentWrapper = ({ children, isMobile }) => {
  const [mobileSidebarOpen, setMobileBarOpen] = React.useState(false);

  const content = (
    <>
      {!isMobile && <LogoBar />}
      <Sidebar
        open={mobileSidebarOpen}
        close={() => setMobileBarOpen(false)}
        routes={Object.keys(routes.main.subRoutes).map(r => routes.main.subRoutes[r])}
        permaRoutes={Object.keys(permaRoutes).map(r => permaRoutes[r])}
      />
      {!isMobile ? <div className="App_inner">{children}</div> : children}
    </>
  );

  return !isMobile ? (
    <div className="App">{content}</div>
  ) : (
    <>
      <div style={{ position: 'fixed', left: 0, top: 0, zIndex: 9 }}>
        <div className="Sidebar_arrow">
          <ClickableIcon
            onClick={() => setMobileBarOpen(true)}
            icon="chevron"
            color={colors.copper}
          />
        </div>
      </div>
      <div style={{ margin: '50px 0' }}>{content}</div>
    </>
  );
};

ContentWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  isMobile: PropTypes.bool.isRequired,
};

export default ContentWrapper;
