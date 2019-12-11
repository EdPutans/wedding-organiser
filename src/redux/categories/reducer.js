export const componentTypes = {
  LIST: 'list',
  SUBCATEGORY: 'subCategory',
};

const hcCategories = {
  clothing: {
    path: '/clothing',
    endpoint: '/clothing',
    type: componentTypes.SUBCATEGORY,
    title: 'Clothing',
  },
  jewelry: {
    path: '/jewelry',
    endpoint: '/jewelry',
    type: componentTypes.SUBCATEGORY,
    title: 'Jewelry',
  },
  appearance: {
    path: '/appearance',
    endpoint: '/appearance',
    type: componentTypes.SUBCATEGORY,
    title: 'Appearance',
  },
  transportation: {
    path: '/transportation',
    endpoint: '/transportation',
    type: componentTypes.SUBCATEGORY,
    title: 'Transportation',
  },
  venue: {
    path: '/venue',
    endpoint: '/venue',
    type: componentTypes.SUBCATEGORY,
    title: 'Venue',
  },
  registryOffice: {
    path: '/registry-office',
    endpoint: '/registry-office',
    type: componentTypes.SUBCATEGORY,
    title: 'Registry Office',
  },
  photographer: {
    path: '/photographer',
    endpoint: '/photographer',
    type: componentTypes.SUBCATEGORY,
    title: 'Photographer',
  },
  musicians: {
    path: '/musicians',
    endpoint: '/musicians',
    type: componentTypes.SUBCATEGORY,
    title: 'Musicians',
  },
  guestList: {
    path: '/guest-list',
    endpoint: '/guest-list',
    type: componentTypes.LIST,
    title: 'Guest List',
  },
  honeymoon: {
    path: '/honeymoon',
    endpoint: '/honeymoon',
    type: componentTypes.SUBCATEGORY,
    title: 'Honeymoon',
  },
  invitations: {
    path: '/invitations',
    endpoint: '/invitations',
    type: componentTypes.SUBCATEGORY,
    title: 'Invitations',
  },
  flowers: {
    path: '/flowers',
    endpoint: '/flowers',
    type: componentTypes.SUBCATEGORY,
    title: 'Flowers',
  },
  decorations: {
    path: '/decorations',
    endpoint: '/decorations',
    type: componentTypes.LIST,
    title: 'Decorations',
  },
  guestGifts: {
    path: '/guest-gifts',
    endpoint: '/guest-gifts',
    type: componentTypes.SUBCATEGORY,
    title: 'Gifts for guests',
  },
  alcohol: {
    path: '/alcohol',
    endpoint: '/alcohol',
    type: componentTypes.SUBCATEGORY,
    title: 'Alcohol',
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
