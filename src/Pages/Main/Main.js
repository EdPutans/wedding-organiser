import React from 'react';
import './styles.scss';
import ImageButton from '../../Components/ImageButton/ImageButton';
import miau from '../../Components/temp/miau.JPG';

// eslint-disable-next-line import/no-cycle
import { routes } from '../../routes';

const Main = ({ history }) => {
  return (
    <React.Fragment>
      <div className="Main_banner" style={{ backgroundImage: `url(${miau})` }} />
      <div className="Main_content">
        {Object.keys(routes.main.subRoutes).map(link => (
          <div key={link.buttonText} className="Main_content_button">
            <ImageButton
              text={routes.main.subRoutes[link].buttonText}
              img={routes.main.subRoutes[link].imageButton}
              onClick={() => history.push(routes.main.subRoutes[link].path)}
            />
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Main;
