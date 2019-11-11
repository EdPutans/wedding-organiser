import React from 'react';
import { PropTypes } from 'prop-types';
import './styles.scss';
import Title from '../../Components/Title/Title';
import Subtitle from '../../Components/Subtitle/Subtitle';

const hardcodedStats = {
  budget: 11000,
  spent: 3002,
  remainder: 7998,
  items: [
    { item: 'Shoes', category: 'Cothing', sum: 200 },
    { item: 'Vodka', category: 'Drinks', sum: 200 },
  ],
};

const Financials = ({ stats = hardcodedStats }) => {
  return (
    <>
      <Title className="Financials_title">Financials</Title>
      <div className="Financials_subtitle_container">
        <Subtitle className="Financials_subtitle">Budget: {stats.budget} </Subtitle>
        <Subtitle className="Financials_subtitle">Spent: {stats.spent} </Subtitle>
        <Subtitle className="Financials_subtitle">Remainder: {stats.remainder} </Subtitle>
      </div>
      <div className="Financials">
        <div className="Financials_row">
          <div className="Financials_row_text">Item</div>
          <div className="Financials_row_text">Category</div>
          <div className="Financials_row_text">Sum</div>
        </div>
        {hardcodedStats.items.map(stat => (
          <div className="Financials_row">
            <div className="Financials_row_text">{stat.item}</div>
            <div className="Financials_row_text">{stat.category}</div>
            <div className="Financials_row_text">{stat.sum}</div>
          </div>
        ))}
      </div>
    </>
  );
};

Financials.propTypes = {
  stats: PropTypes.shape({
    budget: PropTypes.number,
    spent: PropTypes.number,
    remainder: PropTypes.number,
    items: PropTypes.arrayOf(PropTypes.shape({})),
  }),
};
Financials.defaultProps = {
  stats: null,
};

export default Financials;
