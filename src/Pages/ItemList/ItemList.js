import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import { hardcodedInfo } from './CategoryList_OLD';
import ListItem from '../../Components/ListItem/ListItem';
import Title from '../../Components/Title/Title';
import colors from '../../colors.scss';

const ItemList = ({ title }) => {
  return (
    <>
      <Title className="ItemList_title">{title}</Title>
      <div className="ItemList">
        {hardcodedInfo.items.map(i => (
          <ListItem item={i} />
        ))}
      </div>
    </>
  );
};

ItemList.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ItemList;
