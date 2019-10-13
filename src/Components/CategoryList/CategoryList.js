import React, { useEffect, useState } from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import { Input } from '@material-ui/core';
import { getLink } from '../../misc/shared';

const hardcodedInfo = {
  specsText:
    'We want wide rose gold rings (possibly + other metals or gemstones). Male size - X, female size - L 1/2',
  items: [
    {
      id: 1,
      links: ['www.google.com', 'www.google.com', 'www.google.com', 'www.google.com'],
      img: 'http://yeet.yif',
      text: 'Ja nahshla bashmak',
    },
    {
      id: 2,
      links: ['www.google.com'],
      img: 'http://yeet.yif',
      text: 'A on sovsem forshmak',
    },
    {
      id: 3,
      links: ['www.google.com'],
      img: 'http://yeet.yif',
      text: 'ja ego nadenu',
    },
    {
      id: 4,
      links: ['www.google.com'],
      img: 'http://yeet.yif',
      text: 'i budu puskatj penu',
    },
  ],
};

const CategoryList = ({ entity }) => {
  const [initialEntityInfo, setInitialEntityInfo] = useState(null);
  const [entityInfo, setEntityInfo] = useState(null);

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
    console.log(entityInfo.items[currentIndex].text, initialEntityInfo.items[initialIndex].text);

    return entityInfo.items[currentIndex].text !== initialEntityInfo.items[initialIndex].text;
  };

  return (
    <div className="CategoryList">
      <div className="CategoryList_specs">
        <h3 className="CategoryList_specs_text">{entityInfo && entityInfo.specsText}</h3>
      </div>
      {entityInfo &&
        initialEntityInfo &&
        entityInfo.items.map(item => (
          <div className="CategoryList_specRow" key={item.id}>
            <div className="CategoryList_specRow_img_container">
              <img className="CategoryList_specRow_img" src={item.img} />
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
              {hasChanges(item) && <button>gae</button>}
            </div>
            <div className="CategoryList_specRow_links">
              {item.links.map((link, i) => (
                // TO DO: add the ability to add / remove / update links
                <a rel="noopener noreferrer" target="_blank" href={getLink(link)}>
                  Link {i + 1}
                </a>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};

CategoryList.propTypes = {
  entity: PropTypes.string.isRequired,
};
CategoryList.defaultProps = {};

export default CategoryList;
