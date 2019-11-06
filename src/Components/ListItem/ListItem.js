import React from 'react';
import { PropTypes } from 'prop-types';
import './styles.scss';
import ClickableDiv from '../ClickableDiv/ClickableDiv';
import ClickableIcon from '../ClickableIcon/ClickableIcon';

const ListItem = ({ item }) => {
  const [uselessState, setUselessState] = React.useState({ fav: false });
  const [editing, setEditing] = React.useState(false);

  return (
    <div className="ListItem">
      <div className="ListItem_topPanel">
        <div className="ListItem_topPanel_iconCircle">
          <ClickableIcon
            style={{ marginTop: '3px' }}
            onClick={() => setUselessState({ ...uselessState, fav: !uselessState.fav })}
            icon={uselessState.fav ? 'fav_on' : 'fav_off'}
          />
        </div>
        <div className="ListItem_topPanel_iconCircle_double">
          {editing && (
            <div className="ListItem_topPanel_iconCircle">
              <ClickableIcon icon="decline" onClick={() => setEditing(!editing)} />
            </div>
          )}

          <div className="ListItem_topPanel_iconCircle">
            <ClickableIcon
              icon={editing ? 'confirm' : 'edit'}
              onClick={() => setEditing(!editing)}
            />
          </div>
        </div>
      </div>
      <img src={item.img} className="ListItem_image" />
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
