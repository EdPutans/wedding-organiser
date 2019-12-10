// import * as c from './constants';

const consts = {
  LIST: 'LIST',
  SUBCATS: 'SUBCATS',
};

const hcCategories = {
  categories: {
    clothing: {
      path: '/clothing',
      type: consts.SUBCATS,
      buttonText: 'Clothing',
    },
    jewelry: {
      path: '/jewelry',
      type: consts.SUBCATS,
      buttonText: 'Jewelry',
    },
    appearance: {
      path: '/appearance',
      type: consts.SUBCATS,
      buttonText: 'Appearance',
    },
    transportation: {
      path: '/transportation',
      type: consts.SUBCATS,
      buttonText: 'Transportation',
    },
    venue: {
      path: '/venue',
      type: consts.SUBCATS,
      buttonText: 'Venue',
    },
    registryOffice: {
      path: '/registry-office',
      type: consts.SUBCATS,
      buttonText: 'Registry Office',
    },
    photographer: {
      path: '/photographer',
      type: consts.SUBCATS,
      buttonText: 'Photographer',
    },
    musicians: {
      path: '/musicians',
      type: consts.SUBCATS,
      buttonText: 'Musicians',
    },
    guestList: {
      path: '/guest-list',
      type: consts.SUBCATS,
      buttonText: 'Guest List',
    },
    honeymoon: {
      path: '/honeymoon',
      type: consts.SUBCATS,
      buttonText: 'Honeymoon',
    },
    invitations: {
      path: '/invitations',
      type: consts.SUBCATS,
      buttonText: 'Invitations',
    },
    flowers: {
      path: '/flowers',
      type: consts.SUBCATS,
      buttonText: 'Flowers',
    },
    decorations: {
      path: '/decorations',
      type: consts.SUBCATS,
      buttonText: 'Decorations',
    },
    guestGifts: {
      path: '/guest-gifts',
      type: consts.SUBCATS,
      buttonText: 'Gifts for guests',
    },
    alcohol: {
      path: '/alcohol',
      type: consts.SUBCATS,
      buttonText: 'Alcohol',
    },
  },
};

const initialState = {
  routes: hcCategories,
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
