import React from 'react';
import './styles.scss';
import { Checkbox } from '@material-ui/core';
import { historyProps } from '../../misc/proptypes';
import ClickableDiv from '../../Components/ClickableDiv/ClickableDiv';

const forHimImage = '';
const forHerImage = '';

const listItems = {
  // TO DO: allow creating list categories on the back end
  him: [
    {
      name: 'Shoes',
      link: '/clothing/shoes',
    },
    {
      name: 'Suit',
      link: '/suit',
    },
  ],
  her: [
    {
      name: 'Dress',
      link: '/dress',
    },
    {
      name: 'Shoes',
      link: '/shoes',
    },
    {
      name: 'Veil',
      link: '/veil',
    },
    {
      name: 'Gloves',
      link: '/gloves',
    },
  ],
};

const renderItem = (list, history) =>
  list.map(l => (
    // TO DO: l.link => /clothing/him or her/ l.link
    <div className="Clothing_column_listItem">
      <ClickableDiv style={{ flex: 1 }} onClick={() => history.push(l.link)}>
        <p>{l.name}</p>
      </ClickableDiv>
      <Checkbox className="Clothing_checkbox" />
    </div>
  ));

const Clothing = ({ history }) => (
  <div className="Clothing">
    <div className="Clothing_column">
      <div className="Clothing_banner" style={{ backgroundImage: `url(${forHimImage})` }} />
      {renderItem(listItems.her, history)}
    </div>
    <div className="Clothing_column">
      <div className="Clothing_banner" style={{ backgroundImage: `url(${forHerImage})` }} />
      {renderItem(listItems.him, history)}
    </div>
  </div>
);

Clothing.propTypes = {
  history: historyProps.isRequired,
};

export default Clothing;
