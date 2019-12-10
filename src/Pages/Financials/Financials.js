import React from 'react';
import { PropTypes } from 'prop-types';
import './styles.scss';
import { Input, Select, MenuItem, FormControl, InputLabel, Tabs, Tab } from '@material-ui/core';

import Title from '../../Components/Title/Title';
import Subtitle from '../../Components/Subtitle/Subtitle';
import AddItemButton from '../../Components/AddItemButton/AddItemButton';
import FinancialsForm from './FinancialsForm';
import ListTab from './ListTab';
import CategoryTab from './CategoryTab';
import LabelledInput from '../Settings/LabelledInput/LabelledInput';

const hardcodedStats = {
  budget: 11000,
  spent: 3002,
  remainder: 7998,
  items: [
    { item: 'Shoes', category: 'Cothing', sum: 200 },
    { item: 'Vodka', category: 'Drinks', sum: 200 },
    { item: 'Vodka', category: 'Drinks', sum: 200 },
    { item: 'Vodka', category: 'Drinks', sum: 200 },
    { item: 'Vodka', category: 'Drinks', sum: 200 },
    { item: 'Vodka', category: 'Drinks', sum: 200 },
    { item: 'Vodka', category: 'Drinks', sum: 200 },
    { item: 'Vodka', category: 'Drinks', sum: 200 },
    { item: 'Vodka', category: 'Drinks', sum: 200 },
    { item: 'Vodka', category: 'Drinks', sum: 200 },
    { item: 'Vodka', category: 'Drinks', sum: 200 },
    { item: 'Vodka', category: 'Drinks', sum: 200 },
    { item: 'Vodka', category: 'Drinks', sum: 200 },
    { item: 'Vodka', category: 'Drinks', sum: 200 },
    { item: 'Vodka', category: 'Drinks', sum: 200 },
    { item: 'Vodka', category: 'Drinks', sum: 200 },
  ],
};

export const getUniqueCategories = items => {
  const result = [];
  items.forEach(
    item =>
      !result.find(c => c.key === item.category) &&
      result.push({
        key: item.category,
        value: item.category,
        sum: 1600, // will come from backend
      }),
  );
  return result;
};

const Financials = ({ stats = hardcodedStats }) => {
  const [allItems, setAllItems] = React.useState([]);
  const [tab, setTab] = React.useState(1);
  const [itemsToDisplay, setItemsToDisplay] = React.useState([]);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [filters, setFilters] = React.useState({
    category: '',
    itemName: '',
  });

  React.useEffect(() => {
    setItemsToDisplay(
      filters.category
        ? hardcodedStats.items.filter(
            i => i.category.toLowerCase() === filters.category.toLowerCase(),
          )
        : hardcodedStats.items,
    );
  }, [filters.category]);

  React.useEffect(() => {
    setItemsToDisplay(
      allItems.filter(item => item.item.toLowerCase().includes(filters.itemName.toLowerCase())),
    );
  }, [filters.itemName]);

  React.useEffect(() => {
    setItemsToDisplay(hardcodedStats.items);
    setAllItems(hardcodedStats.items);
  }, []);

  const renderFinancials = () => {
    if (tab === 1) {
      return (
        <React.Fragment>
          <div className="Financials_filters">
            <LabelledInput
              className="Financials_filter"
              placeholder="Search"
              onChange={e =>
                setItemsToDisplay(
                  allItems.filter(item => item.item.toLowerCase().includes(e.toLowerCase())),
                )
              }
            />

            {/* REPLACE ALL INOUTS WITH LABELLED INPUTS */}

            <LabelledInput name="Category">
              <Select
                className="Financials_filter"
                value={filters.category}
                onChange={e => setFilters({ itemName: '', category: e.target.value })}
              >
                <MenuItem value="">---------</MenuItem>
                {getUniqueCategories(allItems).map(c => (
                  <MenuItem key={c.key} value={c.key}>
                    {c.value}
                  </MenuItem>
                ))}
              </Select>
            </LabelledInput>
          </div>

          <ListTab itemsToDisplay={itemsToDisplay} />
        </React.Fragment>
      );
    }
    return <CategoryTab itemsToDisplay={hardcodedStats.items} />;
  };

  return (
    <div className="Financials_outerContainer">
      <Title className="Financials_title">Financials</Title>
      <Tabs
        value={tab}
        onChange={(e, val) => setTab(val)}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
      >
        <Tab label="List" value={1} />
        <Tab label="By category" value={2} />
      </Tabs>
      <div style={{ height: '16px' }} />
      {renderFinancials()}
      <AddItemButton onClick={() => setModalOpen(true)} />
      <FinancialsForm open={modalOpen} close={() => setModalOpen(false)} />
    </div>
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
