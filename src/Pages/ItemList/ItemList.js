import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

import ListItem from '../../Components/ListItem/ListItem';
import AddItem from '../../Components/AddItemButton/AddItemButton';
import Title from '../../Components/Title/Title';
import AddItemModal from '../../Components/AddItemModal/AddItemModal';

export const hardcodedInfo = {
  items: [
    {
      id: 1,
      isFav: true,
      links: [
        { id: 1, text: 'http://www.google.com/dsdsgfdhfgdgkfdhgjkfdhgfdkgh   ggjfdgkfd' },
        { id: 2, text: 'www.google.com' },
        { id: 3, text: 'www.google.com' },
        { id: 4, text: 'www.google.com' },
      ],
      img:
        'https://www.wed2b.co.uk/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/r/o/rochelle_wedding_dress_front_viva_bride.jpg',
      text: ` Lorem ipsum dolor amet swag asymmetrical raw denim, lyft austin blue bottle wayfarers
      typewriter master cleanse wolf green juice hammock la croix. Single-origin coffee
      thundercats taiyaki street art iPhone twee tumblr blog af sartorial hella tousled tbh
      messenger bag readymade. Polaroid messenger bag unicorn gluten-free +1 artisan. Bushwick
      kitsch 3 wolf moon, craft beer vaporware cray kale chips hella pop-up. Banh mi snackwave
      venmo la croix pabst crucifix, photo booth mlkshk tofu skateboard roof party. Raclette
      godard hexagon, shaman ugh tumblr pop-up af prism sriracha chicharrones actually chambray.
      Kitsch copper mug hoodie flexitarian +1, pour-over kickstarter glossier scenester woke.`,
    },
    {
      id: 2,
      isFav: false,
      links: [{ id: 5, text: 'http://www.google.com/dsdsgfdhfgdgkfdhgjkfdhgfdkgh   ggjfdgkfd' }],
      img: 'https://siradpion.com/wp-content/uploads/2019/08/ball-gown-wedding-dresses.jpg',
      text: 'A on sovsem forshmak',
    },
    {
      id: 3,
      isFav: false,
      links: [{ id: 6, text: 'http://www.google.com/dsdsgfdhfgdgkfdhgjkfdhgfdkgh   ggjfdgkfd' }],
      img:
        'https://www.wed2b.co.uk/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/r/o/rochelle_wedding_dress_front_viva_bride.jpg',
      text: 'ja ego nadenu',
    },
    {
      id: 4,
      isFav: false,
      links: [{ id: 7, text: 'http://www.google.com/dsdsgfdhfgdgkfdhgjkfdhgfdkgh   ggjfdgkfd' }],
      img:
        'https://www.wed2b.co.uk/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/r/o/rochelle_wedding_dress_front_viva_bride.jpg',
      text: 'i budu puskatj penu',
    },
  ],
};

const ItemList = ({ title }) => {
  const [editingItem, setEditingItem] = React.useState(null);
  const [addingItem, setAddingItem] = React.useState(null);
  return (
    <div className="ItemList">
      <Title className="ItemList_title">{title}</Title>
      {hardcodedInfo.items.map(item => (
        <ListItem item={item} onClickEdit={() => setEditingItem(item)} />
      ))}
      <AddItemModal
        open={editingItem || addingItem}
        onClose={() => {
          setEditingItem(null);
          setAddingItem(null);
        }}
        item={editingItem || addingItem}
      />
      <AddItem onClick={() => setAddingItem({})} />
    </div>
  );
};

ItemList.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ItemList;
