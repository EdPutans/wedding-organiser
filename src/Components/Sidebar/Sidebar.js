import React from 'react';
import './styles.scss';
import { connect } from 'react-redux';
import Drawer from '@material-ui/core/Drawer';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getIsMobile } from '../../redux/mainPage/selectors';
import ClickableIcon from '../ClickableIcon/ClickableIcon';
import colors from '../../colors.scss';
import { routes as rt } from '../../routes';

const ConditionalSidebar = ({ isMobile, routes, open, close }) => {
  const sidebar = (
    <div className="Sidebar">
      <div className="Sidebar_link_container">
        {isMobile && (
          <NavLink className="Sidebar_link" to={rt.main.path} onClick={() => close()}>
            Home
          </NavLink>
        )}
        {routes.map(r => (
          <NavLink key={r.path} className="Sidebar_link" to={r.path} onClick={() => close()}>
            {r.buttonText}
          </NavLink>
        ))}
      </div>
      <div className="Sidebar_unlocker_container">
        <div className="Sidebar_unlocker" />
        {isMobile && (
          <>
            <div className="Sidebar_arrow">
              <ClickableIcon onClick={close} icon="chevron" rotate={180} color={colors.copper} />
            </div>
            <div className="Sidebar_unlocker" />
          </>
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
  open: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isMobile: getIsMobile(state),
});

export default connect(mapStateToProps)(ConditionalSidebar);
