import React from 'react';
import { PropTypes } from 'prop-types';
import './styles.scss';
import { hardcodedInfo } from './CategoryList_OLD';
import ListItem from '../../Components/ListItem/ListItem';

const ItemList = () => {
  return (
    <div className="ItemList">
      {hardcodedInfo.items.map(i => (
        <ListItem item={i} />
      ))}
    </div>
  );
};

ItemList.propTypes = {};
ItemList.defaultProps = {};

export default ItemList;
