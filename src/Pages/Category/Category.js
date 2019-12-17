import React from 'react';
import './styles.scss';
import Checkbox from '@material-ui/core/Checkbox';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { historyProps } from '../../misc/proptypes';
import Title from '../../Components/Title/Title';
import SubTitle from '../../Components/Subtitle/Subtitle';
import ClickableDiv from '../../Components/ClickableDiv/ClickableDiv';
import { getCurrentCategory } from '../../redux/categories/selectors';

const Category = ({ history, category }) => {
  const renderColumn = subCat => {
    return (
      <div className="Category_column">
        <SubTitle className="Category_title">{subCat.name}</SubTitle>
        <div className="Category_column_content_left">
          {subCat.links.map((item, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <div className="Category_item_row" key={i}>
              <ClickableDiv onClick={() => history.push(item.endpoint)} className="Category_item">
                {item.name}
              </ClickableDiv>
              <Checkbox color="primary" />
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="Category">
      <Title className="Category_title">{category.title}</Title>
      <div className="Category_column_container">
        {category.subCategories.map(sc => renderColumn(sc))}
      </div>
    </div>
  );
};

Category.propTypes = {
  history: historyProps.isRequired,
  category: PropTypes.shape().isRequired,
};
const mapStateToProps = (state, ownProps) => ({
  category: getCurrentCategory(state, ownProps.history.location.pathname),
});
const mapDispatchToProps = dispatch => ({});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Category);
