import React, { useEffect, useState } from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import { Input, Button } from '@material-ui/core';
import { getLink } from '../../misc/shared';
import placeholderImage from '../../Components/temp/placeholder.jpg';

const hardcodedInfo = {
  items: [
    {
      id: 1,
      links: [
        { id: 1, text: 'http://www.google.com/dsdsgfdhfgdgkfdhgjkfdhgfdkgh   ggjfdgkfd' },
        { id: 2, text: 'www.google.com' },
        { id: 3, text: 'www.google.com' },
        { id: 4, text: 'www.google.com' },
      ],
      img: null,
      text: 'Ja nahshla bashmak',
    },
    {
      id: 2,
      links: [{ id: 5, text: 'http://www.google.com/dsdsgfdhfgdgkfdhgjkfdhgfdkgh   ggjfdgkfd' }],
      img: null,
      text: 'A on sovsem forshmak',
    },
    {
      id: 3,
      links: [{ id: 6, text: 'http://www.google.com/dsdsgfdhfgdgkfdhgjkfdhgfdkgh   ggjfdgkfd' }],
      img: null,
      text: 'ja ego nadenu',
    },
    {
      id: 4,
      links: [{ id: 7, text: 'http://www.google.com/dsdsgfdhfgdgkfdhgjkfdhgfdkgh   ggjfdgkfd' }],
      img: null,
      text: 'i budu puskatj penu',
    },
  ],
};

const CategoryList = ({ entity }) => {
  const [initialEntityInfo, setInitialEntityInfo] = useState(null);
  const [entityInfo, setEntityInfo] = useState(null);
  const [addingLinkId, setAddingLinkId] = useState(false);
  const [newLink, setNewLink] = useState(null);

  const saveChanges = item => {
    // request .then goes here
  };

  const undoChanges = item => {
    const currentIndex = entityInfo.items.findIndex(i => i.id === item.id);
    const initialIndex = initialEntityInfo.items.findIndex(i => i.id === item.id);
    const newItems = [...entityInfo.items];
    newItems[currentIndex].text = initialEntityInfo.items[initialIndex].text;
    setEntityInfo({ ...entityInfo, items: newItems });
  };
  useEffect(() => {
    setEntityInfo(JSON.parse(JSON.stringify(hardcodedInfo)));
    setInitialEntityInfo(JSON.parse(JSON.stringify(hardcodedInfo)));
    // set initial info AND set info
    // load entities - be that shoes, etc using the passed in prop.
    // TO DO: build entities as api/_entity_/...
  }, []);

  const updateText = (e, item) => {
    const itemToChangeIndex = entityInfo.items.findIndex(i => i.id === item.id);
    const newItems = [...entityInfo.items];
    newItems[itemToChangeIndex].text = e.target.value;
    setEntityInfo({ ...entityInfo, items: newItems });
  };

  const hasChanges = item => {
    const currentIndex = entityInfo.items.findIndex(i => i.id === item.id);
    const initialIndex = initialEntityInfo.items.findIndex(i => i.id === item.id);
    return entityInfo.items[currentIndex].text !== initialEntityInfo.items[initialIndex].text;
  };

  const saveLink = item => {
    const itemToChangeIndex = entityInfo.items.findIndex(i => i.id === item.id);
    const newItems = [...entityInfo.items];
    newItems[itemToChangeIndex].links.push(newLink);
    setAddingLinkId(null);
    setNewLink(null);
  };

  const removeLink = (item, link) => {};

  const categoryRow = item => (
    <div className="CategoryList_specRow" key={item.id}>
      <div className="CategoryList_specRow_img_container">
        <img className="CategoryList_specRow_img" src={item.img || placeholderImage} />
      </div>
      <div className="CategoryList_specRow_text">
        <Input
          className="CategoryList_specRow_text_input"
          rows={10}
          disableUnderline
          multiline
          value={item.text}
          fullWidth
          onChange={e => updateText(e, item)}
        />
        {hasChanges(item) && (
          <div className="CategoryList_specRow_text_saveButton_container">
            <Button
              className="CategoryList_specRow_text_saveButton"
              onClick={() => saveChanges(item)}
            >
              Save
            </Button>
            <Button onClick={() => undoChanges(item)}>Undo</Button>
          </div>
        )}
      </div>
      <div className="CategoryList_specRow_links">
        {item.links.map(link => (
          // TO DO: add the ability to add / remove / update links
          <div className="CategoryList_specRow_links_link_container">
            <Button style={{ flex: 1 }} href={getLink(link.text)}>
              {/* cuts off the HTTP:// */}
              {getLink(link.text).slice(7, 30)}
            </Button>
            <Button onClick={() => removeLink(item, link.text)}>X</Button>
          </div>
        ))}
        {!addingLinkId && <Button onClick={() => setAddingLinkId(item.id)}>Add</Button>}
        {addingLinkId === item.id && (
          <React.Fragment>
            <Input onChange={e => setNewLink(e.target.value)} />
            <div>
              <Button
                onClick={() => {
                  setAddingLinkId(null);
                  setNewLink(null);
                }}
              >
                Cancel
              </Button>
              {newLink && (
                <Button onClick={() => saveLink(item)} color="primary">
                  Save
                </Button>
              )}
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  );

  return (
    <div className="CategoryList">
      {/* <div className="CategoryList_specs"> */}
      {/* <h3 className="CategoryList_specs_text">{entity.toUpperCase()}</h3> */}
      {/* <p className="CategoryList_specs_text">{entityInfo && entityInfo.specsText}</p> */}
      {/* </div> */}
      <div className="CategoryList_outter">
        {entityInfo && initialEntityInfo && entityInfo.items.map(item => categoryRow(item))}
      </div>
    </div>
  );
};

CategoryList.propTypes = {
  entity: PropTypes.string.isRequired,
};
CategoryList.defaultProps = {};

export default CategoryList;
