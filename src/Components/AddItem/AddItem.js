import React from 'react';
import { PropTypes } from 'prop-types';
import './styles.scss';
import { Fab } from '@material-ui/core';
import Plus from '@material-ui/icons/Add';

const AddItem = ({ onClick }) => {
  return (
    <Fab onClick={onClick} className="AddItem">
      <Plus />
    </Fab>
  );
};

export default AddItem;
