import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../Sidebar/Sidebar';
import LogoBar from '../logoBar/logoBar';
// import { permaRoutes } from '../../routes';
import './app.scss';
import ClickableIcon from '../ClickableIcon/ClickableIcon';
import colors from '../../colors.scss';
import { connect } from 'react-redux';
import { getCategories } from '../../redux/categories/selectors';

const ContentWrapper = ({ children, isMobile, routes }) => {
  const [mobileSidebarOpen, setMobileBarOpen] = React.useState(false);

  const content = (
    <React.Fragment>
      <LogoBar />
      <Sidebar
        open={mobileSidebarOpen}
        close={() => setMobileBarOpen(false)}
        routes={Object.keys(routes.categories).map(r => routes.categories[r])}
      />
      {!isMobile ? <div className="App_inner">{children}</div> : children}
    </React.Fragment>
  );

  return !isMobile ? (
    <div className="App">{content}</div>
  ) : (
    <React.Fragment>
      <div style={{ position: 'fixed', left: 8, top: 8, zIndex: 100 }}>
        <div className="Sidebar_arrow">
          <ClickableIcon
            onClick={() => setMobileBarOpen(true)}
            icon="chevron"
            color={colors.copper}
          />
        </div>
      </div>
      <div style={{ margin: '50px 0' }}>{content}</div>
    </React.Fragment>
  );
};

ContentWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  isMobile: PropTypes.bool.isRequired,
};
const mapStateToProps = state => ({
  routes: getCategories(state),
});

export default connect(mapStateToProps)(ContentWrapper);
