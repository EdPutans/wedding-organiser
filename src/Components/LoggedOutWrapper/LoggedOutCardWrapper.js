import React from 'react';

import './styles.scss';
import { NavLink } from 'react-router-dom';
import { Card } from '@material-ui/core';

const CardWrap = ({ children, title, bottomLink }) => (
  <Card className="LoggedOutCardWrap">
    <h3 className="LoggedOutCardWrap_title">{title}</h3>
    {children}
    {bottomLink && <NavLink to={bottomLink.link}>{bottomLink.text}</NavLink>}
    {/* <NavLink to={bottomLink.forgotPw}>{bottomLink.text}</NavLink> */}
  </Card>
);

CardWrap.propTypes = {};
CardWrap.defaultProps = {};

export default CardWrap;
