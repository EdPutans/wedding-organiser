import React from 'react';
import { PropTypes } from 'prop-types';
import './styles.scss';
import ClickableIcon from '../ClickableIcon/ClickableIcon';
import placeholder from '../temp/placeholder.jpg';
import TextArea from '../TextArea/TextArea';
import colors from '../../colors.scss';

const ListItem = ({ item }) => {
  const [uselessState, setUselessState] = React.useState({ fav: false });
  const [editing, setEditing] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  return (
    // eslint-disable-next-line react/jsx-curly-brace-presence
    <div className={`ListItem`}>
      <div className="ListItem_topPanel">
        <ClickableIcon
          color={colors.copper}
          style={{ marginTop: '3px' }}
          onClick={() => setUselessState({ ...uselessState, fav: !uselessState.fav })}
          icon={uselessState.fav ? 'fav_on' : 'fav_off'}
        />
        <img src={item.img || placeholder} className="ListItem_image" />
        <ClickableIcon
          color={colors.copper}
          icon={editing ? 'delete' : 'edit'}
          onClick={() => setEditing(!editing)}
        />
      </div>
      <div className="ListItem_textarea">
        <TextArea placeholder="Leave notes here" rows={10} onChange={() => {}} />
      </div>
      {open && <div>all the links go here</div>}
      <ClickableIcon
        onClick={() => setOpen(!open)}
        style={{ margin: 'auto' }}
        icon="chevron"
        rotate={open ? 270 : 90}
      />
    </div>
  );
};

ListItem.propTypes = {
  item: {
    id: PropTypes.number.isRequired,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string,
      }),
    ),
    img: PropTypes.string.isRequired,
    text: PropTypes.string,
  },
};

ListItem.defaultProps = {
  item: {
    links: [],
    id: null,
    img: null,
    text: '',
  },
};

export default ListItem;
