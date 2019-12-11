import React from 'react';
import './styles.scss';
import { connect } from 'react-redux';
import Drawer from '@material-ui/core/Drawer';
import { NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getIsMobile } from '../../redux/app/selectors';
import { historyProps } from '../../misc/proptypes';
import { getCategories } from '../../redux/categories/selectors';

const ConditionalSidebar = ({ isMobile, open, close, routes, history }) => {
  const sidebar = (
    <div className="Sidebar">
      {Object.keys(routes).map(r => (
        <NavLink
          key={routes[r].path}
          className={`Sidebar_link${
            history && history.location && history.location.pathname === routes[r].path
              ? '_selected'
              : ''
          }`}
          to={routes[r].path}
          onClick={close}
        >
          {routes[r].title}
        </NavLink>
      ))}
    </div>
  );

  return !isMobile ? (
    sidebar
  ) : (
    <Drawer open={open} onClose={close}>
      {sidebar}
    </Drawer>
  );
};

ConditionalSidebar.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  isMobile: PropTypes.bool.isRequired,
  open: PropTypes.bool.isRequired,
  history: historyProps.isRequired,
  close: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isMobile: getIsMobile(state),
  routes: getCategories(state),
});

export default withRouter(connect(mapStateToProps)(ConditionalSidebar));
