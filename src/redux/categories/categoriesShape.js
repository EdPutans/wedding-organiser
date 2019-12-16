import { componentTypes } from './reducer';

export default {
  clothing: {
    path: '/clothing',
    endpoint: '/clothing',
    type: componentTypes.SUBCATEGORY,
    title: 'Clothing',
    subCategories: [
      {
        name: 'For her',
        links: [
          { name: 'Link with things', endpoint: 'link-with-things' },
          { name: 'Link with things', endpoint: 'link-with-things' },
          { name: 'Link with things', endpoint: 'link-with-things' },
        ],
      },
      {
        name: 'For him',
        links: [
          { name: 'Link with things', endpoint: 'link-with-things' },
          { name: 'Link with things', endpoint: 'link-with-things' },
          { name: 'Link with things', endpoint: 'link-with-things' },
        ],
      },
    ],
  },
  jewelry: {
    path: '/jewelry',
    endpoint: '/jewelry',
    type: componentTypes.SUBCATEGORY,
    title: 'Jewelry',
    subCategories: [
      {
        name: 'For her',
        links: [
          { name: 'Link with things', endpoint: 'link-with-things' },
          { name: 'Link with things', endpoint: 'link-with-things' },
          { name: 'Link with things', endpoint: 'link-with-things' },
        ],
      },
      {
        name: 'For him',
        links: [
          { name: 'Link with things', endpoint: 'link-with-things' },
          { name: 'Link with things', endpoint: 'link-with-things' },
          { name: 'Link with things', endpoint: 'link-with-things' },
        ],
      },
    ],
  },
  appearance: {
    path: '/appearance',
    endpoint: '/appearance',
    type: componentTypes.SUBCATEGORY,
    title: 'Appearance',
    subCategories: [
      {
        name: 'For her',
        links: [
          { name: 'Link with things', endpoint: 'link-with-things' },
          { name: 'Link with things', endpoint: 'link-with-things' },
          { name: 'Link with things', endpoint: 'link-with-things' },
        ],
      },
      {
        name: 'For him',
        links: [
          { name: 'Link with things', endpoint: 'link-with-things' },
          { name: 'Link with things', endpoint: 'link-with-things' },
          { name: 'Link with things', endpoint: 'link-with-things' },
        ],
      },
    ],
  },
  transportation: {
    path: '/transportation',
    endpoint: '/transportation',
    type: componentTypes.SUBCATEGORY,
    title: 'Transportation',
    subCategories: [
      {
        name: 'For her',
        links: [
          { name: 'Link with things', endpoint: 'link-with-things' },
          { name: 'Link with things', endpoint: 'link-with-things' },
          { name: 'Link with things', endpoint: 'link-with-things' },
        ],
      },
      {
        name: 'For him',
        links: [
          { name: 'Link with things', endpoint: 'link-with-things' },
          { name: 'Link with things', endpoint: 'link-with-things' },
          { name: 'Link with things', endpoint: 'link-with-things' },
        ],
      },
    ],
  },
  venue: {
    path: '/venue',
    endpoint: '/venue',
    type: componentTypes.SUBCATEGORY,
    title: 'Venue',
    subCategories: [
      {
        name: 'For her',
        links: [
          { name: 'Link with things', endpoint: 'link-with-things' },
          { name: 'Link with things', endpoint: 'link-with-things' },
          { name: 'Link with things', endpoint: 'link-with-things' },
        ],
      },
      {
        name: 'For him',
        links: [
          { name: 'Link with things', endpoint: 'link-with-things' },
          { name: 'Link with things', endpoint: 'link-with-things' },
          { name: 'Link with things', endpoint: 'link-with-things' },
        ],
      },
    ],
  },
  registryOffice: {
    path: '/registry-office',
    endpoint: '/registry-office',
    type: componentTypes.SUBCATEGORY,
    title: 'Registry Office',
    subCategories: [
      {
        name: 'For her',
        links: [
          { name: 'Link with things', endpoint: 'link-with-things' },
          { name: 'Link with things', endpoint: 'link-with-things' },
          { name: 'Link with things', endpoint: 'link-with-things' },
        ],
      },
      {
        name: 'For him',
        links: [
          { name: 'Link with things', endpoint: 'link-with-things' },
          { name: 'Link with things', endpoint: 'link-with-things' },
          { name: 'Link with things', endpoint: 'link-with-things' },
        ],
      },
    ],
  },
  photographer: {
    path: '/photographer',
    endpoint: '/photographer',
    type: componentTypes.SUBCATEGORY,
    title: 'Photographer',
    subCategories: [
      {
        name: 'For her',
        links: [
          { name: 'Link with things', endpoint: 'link-with-things' },
          { name: 'Link with things', endpoint: 'link-with-things' },
          { name: 'Link with things', endpoint: 'link-with-things' },
        ],
      },
      {
        name: 'For him',
        links: [
          { name: 'Link with things', endpoint: 'link-with-things' },
          { name: 'Link with things', endpoint: 'link-with-things' },
          { name: 'Link with things', endpoint: 'link-with-things' },
        ],
      },
    ],
  },
  musicians: {
    path: '/musicians',
    endpoint: '/musicians',
    type: componentTypes.SUBCATEGORY,
    title: 'Musicians',
    subCategories: [
      {
        name: 'For her',
        links: [
          { name: 'Link with things', endpoint: 'link-with-things' },
          { name: 'Link with things', endpoint: 'link-with-things' },
          { name: 'Link with things', endpoint: 'link-with-things' },
        ],
      },
      {
        name: 'For him',
        links: [
          { name: 'Link with things', endpoint: 'link-with-things' },
          { name: 'Link with things', endpoint: 'link-with-things' },
          { name: 'Link with things', endpoint: 'link-with-things' },
        ],
      },
    ],
  },
  guestList: {
    path: '/guest-list',
    endpoint: '/guest-list',
    type: componentTypes.LIST,
    title: 'Guest List',
    subCategories: [
      {
        name: 'For her',
        links: [
          { name: 'Link with things', endpoint: 'link-with-things' },
          { name: 'Link with things', endpoint: 'link-with-things' },
          { name: 'Link with things', endpoint: 'link-with-things' },
        ],
      },
      {
        name: 'For him',
        links: [
          { name: 'Link with things', endpoint: 'link-with-things' },
          { name: 'Link with things', endpoint: 'link-with-things' },
          { name: 'Link with things', endpoint: 'link-with-things' },
        ],
      },
    ],
  },
  honeymoon: {
    path: '/honeymoon',
    endpoint: '/honeymoon',
    type: componentTypes.SUBCATEGORY,
    title: 'Honeymoon',
    subCategories: [
      {
        name: 'For her',
        links: [
          { name: 'Link with things', endpoint: 'link-with-things' },
          { name: 'Link with things', endpoint: 'link-with-things' },
          { name: 'Link with things', endpoint: 'link-with-things' },
        ],
      },
      {
        name: 'For him',
        links: [
          { name: 'Link with things', endpoint: 'link-with-things' },
          { name: 'Link with things', endpoint: 'link-with-things' },
          { name: 'Link with things', endpoint: 'link-with-things' },
        ],
      },
    ],
  },
  invitations: {
    path: '/invitations',
    endpoint: '/invitations',
    type: componentTypes.SUBCATEGORY,
    title: 'Invitations',
    subCategories: [
      {
        name: 'For her',
        links: [
          { name: 'Link with things', endpoint: 'link-with-things' },
          { name: 'Link with things', endpoint: 'link-with-things' },
          { name: 'Link with things', endpoint: 'link-with-things' },
        ],
      },
      {
        name: 'For him',
        links: [
          { name: 'Link with things', endpoint: 'link-with-things' },
          { name: 'Link with things', endpoint: 'link-with-things' },
          { name: 'Link with things', endpoint: 'link-with-things' },
        ],
      },
    ],
  },
  flowers: {
    path: '/flowers',
    endpoint: '/flowers',
    type: componentTypes.SUBCATEGORY,
    title: 'Flowers',
    subCategories: [
      {
        name: 'For her',
        links: [
          { name: 'Link with things', endpoint: 'link-with-things' },
          { name: 'Link with things', endpoint: 'link-with-things' },
          { name: 'Link with things', endpoint: 'link-with-things' },
        ],
      },
      {
        name: 'For him',
        links: [
          { name: 'Link with things', endpoint: 'link-with-things' },
          { name: 'Link with things', endpoint: 'link-with-things' },
          { name: 'Link with things', endpoint: 'link-with-things' },
        ],
      },
    ],
  },
  decorations: {
    path: '/decorations',
    endpoint: '/decorations',
    type: componentTypes.LIST,
    title: 'Decorations',
    subCategories: [
      {
        name: 'For her',
        links: [
          { name: 'Link with things', endpoint: 'link-with-things' },
          { name: 'Link with things', endpoint: 'link-with-things' },
          { name: 'Link with things', endpoint: 'link-with-things' },
        ],
      },
      {
        name: 'For him',
        links: [
          { name: 'Link with things', endpoint: 'link-with-things' },
          { name: 'Link with things', endpoint: 'link-with-things' },
          { name: 'Link with things', endpoint: 'link-with-things' },
        ],
      },
    ],
  },
  guestGifts: {
    path: '/guest-gifts',
    endpoint: '/guest-gifts',
    type: componentTypes.SUBCATEGORY,
    title: 'Gifts for guests',
    subCategories: [
      {
        name: 'For her',
        links: [
          { name: 'Link with things', endpoint: 'link-with-things' },
          { name: 'Link with things', endpoint: 'link-with-things' },
          { name: 'Link with things', endpoint: 'link-with-things' },
        ],
      },
      {
        name: 'For him',
        links: [
          { name: 'Link with things', endpoint: 'link-with-things' },
          { name: 'Link with things', endpoint: 'link-with-things' },
          { name: 'Link with things', endpoint: 'link-with-things' },
        ],
      },
    ],
  },
  alcohol: {
    path: '/alcohol',
    endpoint: '/alcohol',
    type: componentTypes.SUBCATEGORY,
    title: 'Alcohol',
    subCategories: [
      {
        name: 'For her',
        links: [
          { name: 'Link with things', endpoint: 'link-with-things' },
          { name: 'Link with things', endpoint: 'link-with-things' },
          { name: 'Link with things', endpoint: 'link-with-things' },
        ],
      },
      {
        name: 'For him',
        links: [
          { name: 'Link with things', endpoint: 'link-with-things' },
          { name: 'Link with things', endpoint: 'link-with-things' },
          { name: 'Link with things', endpoint: 'link-with-things' },
        ],
      },
    ],
  },
};
