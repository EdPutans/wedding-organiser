import React, { useState } from 'react';
import './styles.scss';
import { connect } from 'react-redux';
import Drawer from '@material-ui/core/Drawer';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getIsMobile } from '../../redux/mainPage/selectors';

const MobileSidebar = ({ routes }) => {
  const [open, setOpen] = useState(false);

  return (
    <Drawer variant="temporary" anchor="left" open={open} onClose={() => setOpen(false)}>
      <div className="Sidebar">
        <div className="Sidebar_link_container">
          {routes.map(r => (
            <NavLink className="Sidebar_link" to={r.path}>
              {r.buttonText}
            </NavLink>
          ))}
        </div>
        <div className="Sidebar_unlocker_container">
          <div className="Sidebar_unlocker" />
        </div>
      </div>
    </Drawer>
  );
};

const Sidebar = ({ routes }) => {
  return (
    <div className="Sidebar">
      <div className="Sidebar_link_container">
        {routes.map(r => (
          <NavLink className="Sidebar_link" to={r.path}>
            {r.buttonText}
          </NavLink>
        ))}
      </div>
      <div className="Sidebar_unlocker_container">
        <div className="Sidebar_unlocker" />
      </div>
    </div>
  );
};

const ConditionalSidebar = ({ isMobile, routes }) =>
  !isMobile ? <Sidebar routes={routes} /> : <MobileSidebar routes={routes} />;

Sidebar.propTypes = {
  routes: PropTypes.shape({}).isRequired,
};
MobileSidebar.propTypes = {
  routes: PropTypes.shape({}).isRequired,
};
ConditionalSidebar.propTypes = {
  routes: PropTypes.shape({}).isRequired,
  isMobile: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isMobile: getIsMobile(state),
});

export default connect(mapStateToProps)(ConditionalSidebar);
