import React from 'react';
import './styles.scss';
import { withRouter } from 'react-router-dom';
import ClickableDiv from '../ClickableDiv/ClickableDiv';
import { routes } from '../../routes';

const LogoBar = ({ history }) => {
  return (
    <ClickableDiv className="LogoBar" onClick={() => history.push(routes.main.path)}>
      <p className="LogoBar_logoText">Happily Ever After</p>
    </ClickableDiv>
  );
};

export default withRouter(LogoBar);
