import { Route } from 'react-router-dom';
import React from 'react';
import Main from './Pages/Main';

const routes = {
  main: {
    path: '/',
    component: Main,
    props: {},
  },
};

export default state =>
  Object.keys(routes).map(route => {
    const { component, path, props } = routes[route];
    return <Route key={path} path={path} render={() => component(props)} />;
  });
