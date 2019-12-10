import { Route } from 'react-router-dom';
import React from 'react';
import Home from './Pages/Main/Main';
import UnderConstruction from './Pages/UnderConstruction';
import Category from './Pages/Category/Category';
import ItemList from './Pages/ItemList/ItemList';
import Financials from './Pages/Financials/Financials';
import Settings from './Pages/Settings/Settings';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';

export const routes = {
  home: {
    path: '/',
    component: Home,
  },
  finances: {
    path: '/finances',
    component: Financials,
    buttonText: 'Finances',
    imageButton: '',
    props: {},
  },
  settings: {
    path: '/settings',
    component: Settings,
    buttonText: 'Settings',
    imageButton: '',
    props: {},
  },
};

export const publics = {
  login: {
    path: '/',
    component: Login,
    buttonText: 'Login',
    imageButton: '',
    props: {},
  },
  register: {
    path: '/signup',
    component: Register,
    buttonText: 'Register',
    imageButton: '',
    props: {},
  },
};

export const recursivelyCreateRoutes = (routeList, resultArray) => {
  Object.keys(routeList).forEach(route => {
    const page = routeList[route];
    console.log(page.path);
    resultArray.push(
      <Route
        key={page.path}
        exact
        path={page.path}
        render={browserProps =>
          page.component ? <page.component {...page.props} {...browserProps} /> : null
        }
      />,
    );
  });
};

const publicRoutesArray = [];
recursivelyCreateRoutes(publics, publicRoutesArray);

export const PublicRoutes = () => publicRoutesArray;
