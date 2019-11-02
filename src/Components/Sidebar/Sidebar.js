import React, { useState } from 'react';
import './styles.scss';
import Drawer from '@material-ui/core/Drawer';
import { NavLink } from 'react-router-dom';

export const mobileSidebar = ({ routes }) => {
  const [open, setOpen] = useState(true);

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

Sidebar.propTypes = {};
Sidebar.defaultProps = {};

export default Sidebar;
