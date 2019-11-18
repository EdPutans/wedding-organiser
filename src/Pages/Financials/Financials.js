import React from 'react';
import { PropTypes } from 'prop-types';
import './styles.scss';
import {
  Paper,
  Input,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Tabs,
  Tab,
} from '@material-ui/core';

import Title from '../../Components/Title/Title';
import Subtitle from '../../Components/Subtitle/Subtitle';
import Filters from '../../Components/Filters/Filters';
import AddItem from '../../Components/AddItem/AddItem';
import HEAModal from '../Modal/Modal';
import FinancialsForm from './FinancialsForm';
import ListTab from './ListTab';
import CategoryTab from './CategoryTab';

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

const Financials = ({ stats = hardcodedStats }) => {
  const [allItems, setAllItems] = React.useState([]);
  const [tab, setTab] = React.useState(1);
  const [index, setIndex] = React.useState(1);
  const [itemsToDisplay, setItemsToDisplay] = React.useState([]);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [filters, setFilters] = React.useState({
    category: '',
    itemName: '',
  });

  const getUniqueCategories = () => {
    const result = [];
    allItems.forEach(
      item =>
        !result.find(c => c.key === item.category) &&
        result.push({ key: item.category, value: item.category }),
    );
    return result;
  };

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
      return <ListTab itemsToDisplay={itemsToDisplay} />;
    }
    return <div> dabA!!!!</div>;
  };

  return (
    <div className="Financials_outerContainer">
      <Title className="Financials_title">Financials</Title>
      <div className="Financials_subtitle_container">
        <Subtitle className="Financials_subtitle">Budget: {stats.budget} </Subtitle>
        <Subtitle className="Financials_subtitle">Spent: {stats.spent} </Subtitle>
        <Subtitle className="Financials_subtitle">Remainder: {stats.remainder} </Subtitle>
      </div>
      <Paper className="Financials_filters">
        <Input
          className="Financials_filter"
          placeholder="Search"
          onChange={e =>
            setItemsToDisplay(
              allItems.filter(item =>
                item.item.toLowerCase().includes(e.target.value.toLowerCase()),
              ),
            )
          }
        />
        <FormControl>
          <InputLabel>Category</InputLabel>
          <Select
            className="Financials_filter"
            value={filters.category}
            onChange={e => setFilters({ itemName: '', category: e.target.value })}
          >
            <MenuItem value="">---------</MenuItem>
            {getUniqueCategories().map(c => (
              <MenuItem key={c.key} value={c.key}>
                {c.value}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Paper>
      <Tabs
        value={tab}
        onChange={(e, val) => setTab(val)}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        aria-label="full width tabs example"
      >
        <Tab label="List" value={1} />
        <Tab label="By category" value={2} />
      </Tabs>
      {renderFinancials()}
      <AddItem onClick={() => setModalOpen(true)} />
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
