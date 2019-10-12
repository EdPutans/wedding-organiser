import { Route } from 'react-router-dom';
import React from 'react';
import Main from './Pages/Main';
import './app.scss';

const routes = {
  main: {
    path: '',
    component: Main,
    props: {},
    subRoutes: {
      dab: {
        path: '/dab',
        component: Main,
        props: {},
        subRoutes: {
          yeet: {
            path: '/yeet',
            component: Main,
            props: {},
          },
          tpose: {
            path: '/tpose',
            component: Main,
            props: {},
          },
        },
      },
    },
  },
};

const generatedRoutes = [];
const recursivelyCreateRoutes = (routeList, subPathName) => {
  return Object.keys(routeList).map(route => {
    const pathName = subPathName ? subPathName + routeList[route].path : routeList[route].path;
    if (routeList[route].subRoutes) {
      recursivelyCreateRoutes(routeList[route].subRoutes, pathName);
    }
    return generatedRoutes.push(
      <Route
        exact
        path={pathName}
        render={() => (
          <div className="App">
            <div className="App_inner">{routeList[route].component(routeList[route].props)}</div>
          </div>
        )}
      />,
    );
  });
};

recursivelyCreateRoutes(routes);

export default () => generatedRoutes;
