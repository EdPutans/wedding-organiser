import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../Sidebar/Sidebar';
import LogoBar from '../logoBar/logoBar';
import { routes } from '../../routes';
import './app.scss';
import ClickableIcon from '../ClickableIcon/ClickableIcon';
import colors from '../../colors.scss';

const ContentWrapper = ({ children, isMobile }) => {
  const [mobileSidebarOpen, setMobileBarOpen] = React.useState(false);
  const content = (
    <>
      <LogoBar />
      <Sidebar
        open={mobileSidebarOpen}
        close={() => setMobileBarOpen(false)}
        routes={Object.keys(routes.main.subRoutes).map(r => routes.main.subRoutes[r])}
      />
      {!isMobile ? (
        <div className="App_inner">{children}</div>
      ) : (
        <div className="App_mobile">
          <div className="Sidebar_unlocker_container">
            <div className="Sidebar_unlocker" />
            <div className="Sidebar_arrow">
              <ClickableIcon
                onClick={() => setMobileBarOpen(true)}
                icon="chevron"
                color={colors.copper}
              />
            </div>
            <div className="Sidebar_unlocker" />
          </div>
          <div className="App_mobile_content">
            <div className="App_mobile_content_pad">{children}</div>
          </div>
        </div>
      )}
    </>
  );
  return !isMobile ? <div className="App">{content}</div> : content;
};

ContentWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  isMobile: PropTypes.bool.isRequired,
};

export default ContentWrapper;
