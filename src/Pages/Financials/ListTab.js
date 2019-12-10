import React from 'react';
import { PropTypes } from 'prop-types';
import './styles.scss';
import { Paper } from '@material-ui/core';
import { tableHeader } from './Financials';

const ListTab = ({ itemsToDisplay }) => {
  return (
    <Paper className="Financials">
      <div className="Financials_scrollableView">
        {itemsToDisplay.map(stat => (
          <div className="Financials_row">
            <div className="Financials_row_text_bold">{stat.item}</div>
            <div className="Financials_row_text">{stat.category}</div>
            <div className="Financials_row_text">{stat.sum}</div>
          </div>
        ))}
      </div>
    </Paper>
  );
};

ListTab.propTypes = {};
ListTab.defaultProps = {};

export default ListTab;
