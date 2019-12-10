import React from 'react';

import './styles.scss';
import { Switch, Button } from '@material-ui/core';
import LabelledInput from '../../Pages/Settings/LabelledInput/LabelledInput';
import Modal from '../../Pages/Modal/Modal';

const AddItemModal = ({ open, onClose, item }) => {
  const [useImageURL, setUseImageURL] = React.useState(false);
  return (
    item && (
      <Modal open={open && item} close={onClose} title="Edit item">
        <div className="AddItemModal_radioContainer">
          <p>Upload image</p>
          <Switch onChange={() => setUseImageURL(!useImageURL)} />
          <p>Image from URL</p>
        </div>
        {useImageURL ? (
          <LabelledInput
            value={item.imageUrl}
            disabled={!useImageURL}
            placeholder="Image url"
            className="AddItemModal_input"
          />
        ) : (
          <p>uploader goes here</p>
        )}

        <LabelledInput placeholder="Title" className="AddItemModal_input" value={item.title} />
        <LabelledInput
          value={item.description}
          placeholder="Description"
          rows={5}
          multiline
          className="AddItemModal_textarea"
        />
        <div>
          <Button className="AddItemModal_button">Save</Button>
          <Button onClick={onClose}>Cancel</Button>
        </div>
      </Modal>
    )
  );
};

AddItemModal.propTypes = {};
AddItemModal.defaultProps = {};

export default AddItemModal;
