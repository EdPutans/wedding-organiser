export const componentTypes = {
  LIST: 'list',
  SUBCATEGORY: 'subCategory',
};
export default {
  clothing: {
    path: '/clothing',
    endpoint: '/clothing',
    type: componentTypes.SUBCATEGORY,
    title: 'Clothing',
    subCategories: [
      {
        name: 'For herski',
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
          { name: 'Link with things', endpoint: 'jewelry/link-with-things' },
          { name: 'Link with things', endpoint: 'jewelry/link-with-things' },
          { name: 'Link with things', endpoint: 'jewelry/link-with-things' },
        ],
      },
      {
        name: 'For him',
        links: [
          { name: 'Link with things', endpoint: 'jewelry/link-with-things' },
          { name: 'Link with things', endpoint: 'jewelry/link-with-things' },
          { name: 'Link with things', endpoint: 'jewelry/link-with-things' },
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

export const listShape = [
  {
    id: 1,
    isFav: true,
    links: [
      { id: 1, text: 'http://www.google.com/dsdsgfdhfgdgkfdhgjkfdhgfdkgh   ggjfdgkfd' },
      { id: 2, text: 'www.google.com' },
      { id: 3, text: 'www.google.com' },
      { id: 4, text: 'www.google.com' },
    ],
    img:
      'https://www.wed2b.co.uk/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/r/o/rochelle_wedding_dress_front_viva_bride.jpg',
    text: ` Lorem ipsum dolor amet swag asymmetrical raw denim, lyft austin blue bottle wayfarers
      typewriter master cleanse wolf green juice hammock la croix. Single-origin coffee
      thundercats taiyaki street art iPhone twee tumblr blog af sartorial hella tousled tbh
      messenger bag readymade. Polaroid messenger bag unicorn gluten-free +1 artisan. Bushwick
      kitsch 3 wolf moon, craft beer vaporware cray kale chips hella pop-up. Banh mi snackwave
      venmo la croix pabst crucifix, photo booth mlkshk tofu skateboard roof party. Raclette
      godard hexagon, shaman ugh tumblr pop-up af prism sriracha chicharrones actually chambray.
      Kitsch copper mug hoodie flexitarian +1, pour-over kickstarter glossier scenester woke.`,
  },
  {
    id: 2,
    isFav: false,
    links: [{ id: 5, text: 'http://www.google.com/dsdsgfdhfgdgkfdhgjkfdhgfdkgh   ggjfdgkfd' }],
    img: 'https://siradpion.com/wp-content/uploads/2019/08/ball-gown-wedding-dresses.jpg',
    text: 'A on sovsem forshmak',
  },
  {
    id: 3,
    isFav: false,
    links: [{ id: 6, text: 'http://www.google.com/dsdsgfdhfgdgkfdhgjkfdhgfdkgh   ggjfdgkfd' }],
    img:
      'https://www.wed2b.co.uk/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/r/o/rochelle_wedding_dress_front_viva_bride.jpg',
    text: 'ja ego nadenu',
  },
  {
    id: 4,
    isFav: false,
    links: [{ id: 7, text: 'http://www.google.com/dsdsgfdhfgdgkfdhgjkfdhgfdkgh   ggjfdgkfd' }],
    img:
      'https://www.wed2b.co.uk/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/r/o/rochelle_wedding_dress_front_viva_bride.jpg',
    text: 'i budu puskatj penu',
  },
];
