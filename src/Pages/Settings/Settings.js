import React from 'react';
// import { PropTypes } from 'prop-types';
import './styles.scss';
import Title from '../../Components/Title/Title';
import LabelledInput from './LabelledInput/LabelledInput';

const Settings = () => {
  const renderSettingsSection = (items, onChange) => {
    return (
      <div className="Settings_section">
        {items.map(item => (
          <LabelledInput name={item.name} placeholder={item.placeholder} onChange={onChange} />
        ))}
      </div>
    );
  };

  return (
    <div className="Settings">
      <Title className="Settings_title">Settings</Title>
      {renderSettingsSection([{ name: 'Name', placeholder: 'Name' }], () => {})}
      {renderSettingsSection([])}
    </div>
  );
};

Settings.propTypes = {};
Settings.defaultProps = {};

export default Settings;
