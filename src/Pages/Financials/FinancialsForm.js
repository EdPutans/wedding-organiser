import React, { useState } from 'react';
import './formStyles.scss';
import {
  Input,
  Select,
  MenuItem,
  InputAdornment,
  FormControl,
  InputLabel,
  Button,
} from '@material-ui/core';
import HEAModal from '../Modal/Modal';
import LabelledInput from '../Settings/LabelledInput/LabelledInput';

const hccategories = [{ key: 'Booze', value: 'alcohol' }, { key: 'Clothing', value: 'clothing' }];

const FinancialsForm = ({ open, close, title, editing, categories }) => {
  // categories to be connected directly to redux?

  const [entry, setEntry] = useState({});

  return (
    <HEAModal
      close={close}
      open={open}
      className="FinincialsForm"
      title={title || 'Add an expense'}
    >
      <LabelledInput className="FinancialsForm_input" onChange={() => {}} placeholder="Name" />
      <LabelledInput name="Category">
        <Select
          className="FinancialsForm_input"
          placeholder="Category"
          value={entry.category}
          onChange={e => setEntry({ ...entry, category: e.target.value })}
        >
          {hccategories.map(c => (
            <MenuItem value={c.value}>{c.key}</MenuItem>
          ))}
        </Select>
      </LabelledInput>
      <LabelledInput
        name="Spent"
        className="FinancialsForm_input"
        type="number"
        onChange={() => {}}
        startAdornment={<InputAdornment position="start">£</InputAdornment>} // TODO: let user select currency
      />
      <div className="FinancialsForm_buttons">
        <Button className="FinancialsForm_buttons_button">Save</Button>
        <Button className="FinancialsForm_sec" onClick={() => close()}>
          Cancel
        </Button>
      </div>
    </HEAModal>
  );
};

FinancialsForm.propTypes = {};
FinancialsForm.defaultProps = {};

export default FinancialsForm;
