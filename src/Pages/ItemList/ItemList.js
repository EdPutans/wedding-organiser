import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import { Input, Switch } from '@material-ui/core';
import { hardcodedInfo } from './CategoryList_OLD';
import ListItem from '../../Components/ListItem/ListItem';
import Title from '../../Components/Title/Title';
import Modal from '../Modal/Modal';
// import colors from '../../colors.scss';

const ItemList = ({ title, mode }) => {
  const [editing, setEditing] = React.useState(null);
  const [useImageURL, setUseImageURL] = React.useState(false);
  return (
    <>
      <div className="ItemList">
        <Title className="ItemList_title">{title}</Title>
        {hardcodedInfo.items.map(i => (
          <ListItem item={i} setEditing={() => setEditing(i)} />
        ))}
      </div>
      <Modal open={editing} close={() => setEditing(null)} title="Edit item">
        <div className="ItemList_radioContainer">
          <p>Upload image</p>
          <Switch onChange={() => setUseImageURL(!useImageURL)} />
          <p>Image from URL</p>
        </div>
        {useImageURL ? (
          <Input disabled={!useImageURL} placeholder="Image url" className="ItemList_input" />
        ) : (
          <p>uploader goes here</p>
        )}

        <Input placeholder="Title" className="ItemList_input" />
        <Input placeholder="Description" rows={5} multiline className="ItemList_textarea" />
      </Modal>
    </>
  );
};

ItemList.propTypes = {
  title: PropTypes.string.isRequired,
  mode: PropTypes.oneOf(['new', 'edit']),
};
ItemList.defaultProps = {
  mode: 'edit',
};
export default ItemList;
