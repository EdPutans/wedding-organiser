import React from 'react';
import './styles.scss';
import { historyProps } from '../../misc/proptypes';

const listItems = {
  // TO DO: allow creating list categories on the back end
  him: [
    {
      name: 'Shoes',
      link: '/Category/shoes',
    },
    {
      name: 'Suit',
      link: '/suit',
    },
  ],
  her: [
    {
      name: 'Dress',
      link: '/dress',
    },
    {
      name: 'Shoes',
      link: '/shoes',
    },
    {
      name: 'Veil',
      link: '/veil',
    },
    {
      name: 'Gloves',
      link: '/gloves',
    },
  ],
};

const Category = ({ history }) => (
  <div className="Category">
    <p className="Category_title">Clothes</p>
    <div className="Category_column_container">
      <div className="Category_column"></div>
      <div className="Category_column"></div>
    </div>
  </div>
);

Category.propTypes = {
  history: historyProps.isRequired,
};

export default Category;
