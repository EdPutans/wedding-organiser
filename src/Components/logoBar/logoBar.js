import React from 'react';
import './styles.scss';
import { withRouter } from 'react-router-dom';
import ClickableDiv from '../ClickableDiv/ClickableDiv';
import { routes } from '../../routes';
import ClickableIcon from '../ClickableIcon/ClickableIcon';
import { copper } from '../../colors.scss';

const LogoBar = ({ history }) => {
  return (
    <div className="LogoBar_container">
      <ClickableDiv className="LogoBar" onClick={() => history.push(routes.home.path)}>
        <p className="LogoBar_logoText">Happily Ever After</p>
      </ClickableDiv>
      <div className="LogoBar_icon_container">
        <ClickableIcon
          color={copper}
          onClick={() => history.push(routes.finances.path)}
          size={30}
          className="LogoBar_icon"
          icon="profile"
        />
        <ClickableIcon
          color={copper}
          onClick={() => history.push(routes.settings.path)}
          size={30}
          className="LogoBar_icon"
          icon="settings"
        />
      </div>
    </div>
  );
};

export default withRouter(LogoBar);
