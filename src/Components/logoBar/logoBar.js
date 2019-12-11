import React from 'react';
import './styles.scss';
import { withRouter } from 'react-router-dom';
import ClickableDiv from '../ClickableDiv/ClickableDiv';
import { routes } from '../../routes';
import ClickableIcon from '../ClickableIcon/ClickableIcon';
import { white } from '../../colors.scss';

const LogoBar = ({ history, onClickBurger, isMobile }) => {
  return (
    <div className="LogoBar_container">
      {isMobile && (
        <ClickableIcon
          icon="menu"
          onClick={onClickBurger}
          color={white}
          className="LogoBar_icon_menu"
        />
      )}
      <ClickableDiv className="LogoBar_logoText" onClick={() => history.push(routes.home.path)}>
        <p>Happily Ever After</p>
      </ClickableDiv>
      <div className="LogoBar_icon_container">
        <ClickableIcon
          color={white}
          onClick={() => history.push(routes.finances.path)}
          size={25}
          className="LogoBar_icon"
          icon="finances"
        />
        <ClickableIcon
          color={white}
          onClick={() => history.push(routes.settings.path)}
          size={25}
          className="LogoBar_icon"
          icon="settings"
        />
      </div>
    </div>
  );
};

export default withRouter(LogoBar);
