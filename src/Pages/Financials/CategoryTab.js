import React from 'react';
import { PropTypes } from 'prop-types';
import './styles.scss';
import { Paper } from '@material-ui/core';
import ClickableDiv from '../../Components/ClickableDiv/ClickableDiv';
// eslint-disable-next-line import/no-cycle
import { getUniqueCategories, tableHeader } from './Financials';

const CategoryRow = ({ category, itemsToDisplay }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <ClickableDiv className="Financials_row Financials_category" onClick={() => setOpen(!open)}>
        <div className="Financials_row_text ">{category.value}</div>
        {!open && <div className="Financials_row_text ">{category.sum}</div>}
      </ClickableDiv>
      {open && (
        <>
          {tableHeader}
          {itemsToDisplay
            .filter(i => i.category === category.key)
            .map(stat => (
              <div className="Financials_row">
                <p className="Financials_row_text_bold">{stat.item}</p>
                <p className="Financials_row_text">{stat.category}</p>
                <p className="Financials_row_text">{stat.sum}</p>
              </div>
            ))}
          <div className="Financials_row" style={{ justifyContent: 'flex-end' }}>
            <p className="Financials_row_text">Total:</p>
            <p className="Financials_row_text_bold">{category.sum}</p>
          </div>
        </>
      )}
    </>
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
