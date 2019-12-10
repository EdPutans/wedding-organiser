import React from 'react';
import { PropTypes } from 'prop-types';
import './styles.scss';
import { Fab } from '@material-ui/core';
import Plus from '@material-ui/icons/Add';
import { white } from '../../colors.scss';

const AddItem = ({ onClick }) => {
  return (
    <Fab onClick={onClick} className="AddItem">
      <Plus style={{ fill: white }} />
    </Fab>
  );
};

AddItem.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddItem;
