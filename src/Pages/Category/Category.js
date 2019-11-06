import React from 'react';
import './styles.scss';
import Checkbox from '@material-ui/core/Checkbox';
import { historyProps } from '../../misc/proptypes';
import Title from '../../Components/Title/Title';
import SubTitle from '../../Components/Subtitle/Subtitle';
import ClickableDiv from '../../Components/ClickableDiv/ClickableDiv';

const listItems = {
  category: 'Clothing',
  him: [
    {
      name: 'Shoes',
      link: '/clothing/shoes',
    },
    {
      name: 'Suit',
      link: '/clothing/suit',
    },
  ],
  her: [
    {
      name: 'Dress',
      link: '/clothing/dress',
    },
    {
      name: 'Shoes',
      link: '/clothing/shoes',
    },
    {
      name: 'Veil',
      link: '/clothing/veil',
    },
    {
      name: 'Gloves',
      link: '/clothing/gloves',
    },
  ],
};

const Category = ({ history }) => (
  <div className="Category">
    <Title className="Category_title">{listItems.category}</Title>
    <div className="Category_column_container">
      <div className="Category_column">
        <SubTitle className="Category_title">
          For <b>her</b>
        </SubTitle>
        <div className="Category_column_content_left">
          {listItems.her.map(item => (
            <div className="Category_item_row">
              <ClickableDiv onClick={() => history.push(item.link)} className="Category_item">
                {item.name}
              </ClickableDiv>
              <Checkbox color="primary" />
            </div>
          ))}
        </div>
      </div>
      <div className="Category_column">
        <SubTitle className="Category_title">
          For <b>him</b>
        </SubTitle>
        <div className="Category_column_content">
          {listItems.him.map(item => (
            <div className="Category_item_row">
              <ClickableDiv onClick={() => history.push(item.link)} className="Category_item">
                {item.name}
              </ClickableDiv>
              <Checkbox color="primary" />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

Category.propTypes = {
  history: historyProps.isRequired,
};

export default Category;
