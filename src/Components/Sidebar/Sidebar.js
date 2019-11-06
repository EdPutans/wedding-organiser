import React from 'react';
import './styles.scss';
import { connect } from 'react-redux';
import Drawer from '@material-ui/core/Drawer';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getIsMobile } from '../../redux/mainPage/selectors';
import ClickableIcon from '../ClickableIcon/ClickableIcon';
import colors from '../../colors.scss';

const ConditionalSidebar = ({ isMobile, routes, open, close }) => {
  const sidebar = (
    <div className="Sidebar">
      <div className="Sidebar_link_container">
        {routes.map(r => (
          <NavLink key={r.path} className="Sidebar_link" to={r.path}>
            {r.buttonText}
          </NavLink>
        ))}
      </div>
      <div className="Sidebar_unlocker_container">
        <div className="Sidebar_unlocker" />
        {isMobile && (
          <React.Fragment>
            <div className="Sidebar_arrow">
              <ClickableIcon onClick={close} icon="chevron" rotate={180} color={colors.copper} />
            </div>
            <div className="Sidebar_unlocker" />
          </React.Fragment>
        )}
      </div>
    </div>
  );

  return !isMobile ? (
    sidebar
  ) : (
    <Drawer open={open} onClose={() => close()}>
      {sidebar}
    </Drawer>
  );
};

ConditionalSidebar.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  isMobile: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isMobile: getIsMobile(state),
});

export default connect(mapStateToProps)(ConditionalSidebar);
