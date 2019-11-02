import { Route } from 'react-router-dom';
import React from 'react';
// eslint-disable-next-line import/no-cycle
import Main from './Pages/Main/Main';
import UnderConstruction from './Pages/UnderConstruction';
import Category from './Pages/Category/Category';
import CategoryList from './Pages/CategoryList/CategoryList';

export const routes = {
  main: {
    path: '',
    component: Main,
    props: {},
    subRoutes: {
      clothing: {
        path: '/clothing',
        component: Category,
        buttonText: 'Clothing',
        imageButton: '',
        props: {},
        subRoutes: {
          shoes: {
            path: '/shoes',
            buttonText: 'Shoes',
            component: () => <CategoryList entity="shoes" />,
          },
        },
      },
      jewelry: {
        path: '/jewelry',
        component: null,
        buttonText: 'Jewelry',
        imageButton: '',
        props: {},
      },
      appearance: {
        path: '/appearance',
        component: null,
        buttonText: 'Appearance',
        imageButton: '',
        props: {},
      },
      transportation: {
        path: '/transportation',
        component: null,
        buttonText: 'Transportation',
        imageButton: '',
        props: {},
      },
      venue: {
        path: '/venue',
        component: null,
        buttonText: 'Venue',
        imageButton: '',
        props: {},
      },
      registryOffice: {
        path: '/registry-office',
        component: null,
        buttonText: 'Registry Office',
        imageButton: '',
        props: {},
      },
      photographer: {
        path: '/photographer',
        component: null,
        buttonText: 'Photographer',
        imageButton: '',
        props: {},
      },
      musicians: {
        path: '/musicians',
        component: null,
        buttonText: 'Musicians',
        imageButton: '',
        props: {},
      },
      guestList: {
        path: '/guest-list',
        component: null,
        buttonText: 'Guest List',
        imageButton: '',
        props: {},
      },
      finances: {
        path: '/finances',
        component: null,
        buttonText: 'Finances',
        imageButton: '',
        props: {},
      },
      honeymoon: {
        path: '/honeymoon',
        component: null,
        buttonText: 'Honeymoon',
        imageButton: '',
        props: {},
      },
      invitations: {
        path: '/invitations',
        component: null,
        buttonText: 'Invitations',
        imageButton: '',
        props: {},
      },
      flowers: {
        path: '/flowers',
        component: null,
        buttonText: 'Flowers',
        imageButton: '',
        props: {},
      },
      decorations: {
        path: '/decorations',
        component: null,
        buttonText: 'Decorations',
        imageButton: '',
        props: {},
      },
      guestGifts: {
        path: '/guest-gifts',
        component: null,
        buttonText: 'Gifts for guests',
        imageButton: '',
        props: {},
      },
      alcohol: {
        path: '/alcohol',
        component: null,
        buttonText: 'Alcohol',
        imageButton: '',
        props: {},
      },
    },
  },
};

const recursivelyCreateRoutes = (routeList, subPathName) => {
  return Object.keys(routeList).map(route => {
    const page = routeList[route];
    const pathName = subPathName ? subPathName + page.path : page.path; // /yeet + /dab = /yeet/dab
    if (page.subRoutes) {
      recursivelyCreateRoutes(page.subRoutes, pathName);
    }
    return generatedRoutes.push(
      <Route
        key={pathName}
        exact
        path={pathName}
        component={browserProps =>
          page.component ? (
            page.component({ ...page.props, ...browserProps })
          ) : (
            <UnderConstruction />
          )
        }
      />,
    );
  });
};

const generatedRoutes = [];
recursivelyCreateRoutes(routes);
// TO DO : Add 404 page
// generatedRoutes.push(<Route render={FourOhFour} />);

export default () => generatedRoutes;
