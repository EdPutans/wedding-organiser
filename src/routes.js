import { Route } from 'react-router-dom';
import React from 'react';
import Main from './Pages/Main';
import './app.scss';

const routes = {
  main: {
    path: '/',
    component: Main,
    props: {},
  },
};

export default () =>
  Object.keys(routes).map(route => {
    const { component, path, props } = routes[route];
    return (
      <Route
        key={path}
        path={path}
        render={() => (
          <div className="App">
            <div className="App_inner">{component(props)}</div>
          </div>
        )}
      />
    );
  });
