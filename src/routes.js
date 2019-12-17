import { Route } from 'react-router-dom';
import React from 'react';
import Home from './Pages/Main/Main';
// import UnderConstruction from './Pages/UnderConstruction';
import Category from './Pages/Category/Category';
import ItemList from './Pages/ItemList/ItemList';
import Financials from './Pages/Financials/Financials';
import Settings from './Pages/Settings/Settings';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import { componentTypes } from './redux/categories/categoriesShape';

export const routes = {
  home: {
    path: '/',
    component: Home,
  },
  finances: {
    path: '/finances',
    component: Financials,
    title: 'Finances',
    imageButton: '',
    props: {},
  },
  settings: {
    path: '/settings',
    component: Settings,
    title: 'Settings',
    imageButton: '',
    props: {},
  },
};

export const publics = {
  login: {
    path: '/',
    component: Login,
    title: 'Login',
    imageButton: '',
    props: {},
  },
  register: {
    path: '/signup',
    component: Register,
    title: 'Register',
    imageButton: '',
    props: {},
  },
};

const getComponent = (page, props) => {
  if (page.component) {
    return <page.component {...page.props} {...props} />;
  }

  switch (page.type) {
    case componentTypes.SUBCATEGORY:
      return <Category {...page.props} {...props} title={page.title} endpoint={page.endpoint} />;
    case componentTypes.LIST:
      return <ItemList {...page.props} {...props} title={page.title} endpoint={page.endpoint} />;
    default:
      return null;
  }
};

export const recursivelyCreateRoutes = routeList => {
  return Object.keys(routeList).map(route => {
    const page = routeList[route];
    return (
      <Route
        key={page.path}
        exact
        path={page.path}
        render={browserProps => getComponent(page, browserProps)}
      />
    );
  });
};
