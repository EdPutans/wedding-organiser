import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import { hardcodedInfo } from './CategoryList_OLD';
import ListItem from '../../Components/ListItem/ListItem';
import AddItem from '../../Components/AddItemButton/AddItemButton';
import Title from '../../Components/Title/Title';
import AddItemModal from '../../Components/AddItemModal/AddItemModal';

const ItemList = ({ title }) => {
  const [editingItem, setEditingItem] = React.useState(null);
  const [addingItem, setAddingItem] = React.useState(null);
  return (
    <div className="ItemList">
      <Title className="ItemList_title">{title}</Title>
      {hardcodedInfo.items.map(item => (
        <ListItem item={item} onClickEdit={() => setEditingItem(item)} />
      ))}
      <AddItemModal
        open={editingItem || addingItem}
        onClose={() => {
          setEditingItem(null);
          setAddingItem(null);
        }}
        item={editingItem || addingItem}
      />
      <AddItem onClick={() => setAddingItem({})} />
    </div>
  );
};

ItemList.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ItemList;
