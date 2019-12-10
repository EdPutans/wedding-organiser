import React from 'react';
import { PropTypes } from 'prop-types';
import './styles.scss';
import { Paper } from '@material-ui/core';

const ListTab = ({ itemsToDisplay }) => {
  return (
    <Paper className="Financials">
      <div className="Financials_scrollableView">
        <div className="Financials_row Financials_row_header">
          <div className="Financials_row_text Financials_row_header">Item name</div>
          <div className="Financials_row_text Financials_row_header">Category</div>
          <div className="Financials_row_text Financials_row_header">Spent</div>
        </div>
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
