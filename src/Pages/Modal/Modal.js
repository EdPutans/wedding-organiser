import React from 'react';
import { PropTypes } from 'prop-types';
import './styles.scss';
import { Dialog } from '@material-ui/core';
import Subtitle from '../../Components/Subtitle/Subtitle';

const HEAModal = ({ children, open, close, title }) => {
  return open ? (
    <Dialog
      PaperProps={{
        style: {
          margin: 'auto 0',
        },
      }}
      onClose={close}
      open={Boolean(open)}
      className="Modal"
    >
      <div className="Modal_inner">
        <Subtitle className="Modal_title">{title}</Subtitle>

        {children}
      </div>
    </Dialog>
  ) : null;
};

HEAModal.propTypes = {
  open: PropTypes.bool.isRequired,
  children: PropTypes.node,
  close: PropTypes.func.isRequired,
};
HEAModal.defaultProps = {
  children: null,
};

export default HEAModal;
