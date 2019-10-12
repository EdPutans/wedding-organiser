import React from 'react';
import './styles.scss';
import ImageButton from '../Components/ImageButton/ImageButton';
import miau from '../Components/temp/miau.JPG';

const pics = [
  {
    text: 'yeet',
    img:
      'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg',
  },
  {
    text: 'yeet',
    img:
      'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg',
  },
  {
    text: 'yeet',
    img:
      'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg',
  },
  {
    text: 'yeet',
    img:
      'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg',
  },
  {
    text: 'yeet',
    img:
      'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg',
  },
  {
    text: 'yeet',
    img: ''
      // 'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg',
  },
];
const Main = () => {
  return (
    <React.Fragment>
      <div className="Main_banner" style={{ backgroundImage: `url(${miau})` }} />
      <div className="Main_content">
        {pics.map(pic => (
          <div className="Main_content_button">
            <ImageButton text={pic.text} img={pic.img} />
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Main;
