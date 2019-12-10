import React from 'react';
import { PropTypes } from 'prop-types';
import './styles.scss';
import ClickableDiv from '../ClickableDiv/ClickableDiv';

// requires container with set dimensions or params
const ImageButton = ({ img, text, onClick }) => {
  return (
    <ClickableDiv className="ImageButton" onClick={() => onClick()}>
      <div className="ImageButton_cover" />
      <div className="ImageButton_inner" style={{ backgroundImage: `url(${img})` }}></div>
      <p className="ImageButton_text">{text}</p>
    </ClickableDiv>
  );
};

ImageButton.propTypes = {
  img: PropTypes.string,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
ImageButton.defaultProps = {
  onClick: () => console.log('not implemented yet'),
  img:
    'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg',
};

export default ImageButton;
