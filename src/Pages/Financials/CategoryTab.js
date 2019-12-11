import React from 'react';

import './styles.scss';
import { Paper } from '@material-ui/core';
import ClickableDiv from '../../Components/ClickableDiv/ClickableDiv';
import { getUniqueCategories } from './Financials';

const moment = require('moment');

const CategoryRow = ({ category, itemsToDisplay }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <ClickableDiv className="Financials_row Financials_category" onClick={() => setOpen(!open)}>
        <div className="Financials_row_text ">{category.value}</div>
        {!open && <div className="Financials_row_text">{category.sum}</div>}
      </ClickableDiv>
      {open && (
        <React.Fragment>
          <div className="Financials_row Financials_header">
            <div className="Financials_row_text">Item</div>
            <div className="Financials_row_text">Sum</div>
            <div className="Financials_row_text">Added on</div>
          </div>
          {itemsToDisplay
            .filter(i => i.category === category.key)
            .map(stat => (
              <div className="Financials_row">
                <p className="Financials_row_text_bold">{stat.item}</p>
                <p className="Financials_row_text">{stat.sum}</p>
                <p className="Financials_row_text">{moment().format('DD/MM/YYYY HH:mm')}</p>
              </div>
            ))}
          <div className="Financials_row" style={{ justifyContent: 'flex-end' }}>
            <p className="Financials_row_text">Total:</p>
            <p className="Financials_row_text_bold">{category.sum}</p>
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

const CategoryTab = ({ itemsToDisplay }) => {
  const categories = getUniqueCategories(itemsToDisplay);

  return (
    <Paper className="Financials">
      <div className="Financials_scrollableView">
        {categories.map(category => (
          <CategoryRow category={category} itemsToDisplay={itemsToDisplay} />
        ))}
      </div>
    </Paper>
  );
};

CategoryTab.propTypes = {};
CategoryTab.defaultProps = {};

export default CategoryTab;
