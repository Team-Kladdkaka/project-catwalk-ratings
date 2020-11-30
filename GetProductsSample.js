/* eslint-disable camelcase */

var sample = {
  getProducts: [
    {
      id: 1,
      name: 'Camo Onesie',
      slogan: 'Blend in to your crowd',
      description:
        'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
      category: 'Jackets',
      default_price: '140',
    },
    {
      id: 2,
      name: 'Bright Future Sunglasses',
      slogan: 'You\'ve got to wear shades',
      description:
        'Where you\'re going you might not need roads, but you definitely need some shades. Give those baby blues a rest and let the future shine bright on these timeless lenses.',
      category: 'Accessories',
      default_price: '69',
    },
    {
      id: 3,
      name: 'Morning Joggers',
      slogan: 'Make yourself a morning person',
      description:
        'Whether you\'re a morning person or not.  Whether you\'re gym bound or not.  Everyone looks good in joggers.',
      category: 'Pants',
      default_price: '40',
    },
    {
      id: 4,
      name: 'Slacker\'s Slacks',
      slogan: 'Comfortable for everything, or nothing',
      description: 'I\'ll tell you how great they are after I nap for a bit.',
      category: 'Pants',
      default_price: '65',
    },
    {
      id: 5,
      name: 'Heir Force Ones',
      slogan: 'A sneaker dynasty',
      description:
        'Now where da boxes where I keep mine? You should peep mine, maybe once or twice but never three times. I\'m just a sneaker pro, I love Pumas and shell toes, but can\'t nothin compare to a fresh crispy white pearl',
      category: 'Kicks',
      default_price: '99',
    },
  ],

  getProduct: {
    id: 1,
    name: 'Camo Onesie',
    slogan: 'Blend in to your crowd',
    description:
      'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
    category: 'Jackets',
    default_price: '140',
    features: [
      {
        feature: 'Buttons',
        value: 'Brass',
      },
    ],
  },

  getStyles: {
    product_id: '1',
    results: [
      {
        style_id: 1,
        name: 'Forest Green & Black',
        original_price: '140',
        sale_price: '0',
        'default?': 1,
        photos: [
          {
            thumbnail_url:
              'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            url:
              'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
          },
          {
            thumbnail_url:
              'https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            url:
              'https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80',
          },
          {
            thumbnail_url:
              'https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            url:
              'https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80',
          },
          {
            thumbnail_url:
              'https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
            url:
              'https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
          },
          {
            thumbnail_url:
              'https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            url:
              'https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
          },
          {
            thumbnail_url:
              'https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            url:
              'https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
          },
        ],
        skus: {
          1: {
            quantity: 8,
            size: 'XS',
          },
          2: {
            quantity: 16,
            size: 'S',
          },
          3: {
            quantity: 17,
            size: 'M',
          },
          4: {
            quantity: 10,
            size: 'L',
          },
          5: {
            quantity: 15,
            size: 'XL',
          },
          6: {
            quantity: 4,
            size: 'XL',
          },
        },
      },
      {
        style_id: 2,
        name: 'Desert Brown & Tan',
        original_price: '140',
        sale_price: '0',
        'default?': 0,
        photos: [
          {
            thumbnail_url:
              'https://images.unsplash.com/photo-1560567546-4c6dbc16877b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            url:
              'https://images.unsplash.com/photo-1560567546-4c6dbc16877b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
          },
          {
            thumbnail_url:
              'https://images.unsplash.com/photo-1533779183510-8f55a55f15c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            url:
              'https://images.unsplash.com/photo-1533779183510-8f55a55f15c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
          },
          {
            thumbnail_url:
              'https://images.unsplash.com/photo-1458253329476-1ebb8593a652?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            url:
              'https://images.unsplash.com/photo-1458253329476-1ebb8593a652?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
          },
          {
            thumbnail_url:
              'https://images.unsplash.com/photo-1422557379185-474fa15bf770?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            url:
              'https://images.unsplash.com/photo-1422557379185-474fa15bf770?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
          },
          {
            thumbnail_url:
              'https://images.unsplash.com/photo-1490723286627-4b66e6b2882a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            url:
              'https://images.unsplash.com/photo-1490723286627-4b66e6b2882a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
          },
          {
            thumbnail_url:
              'https://images.unsplash.com/photo-1447958272669-9c562446304f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            url:
              'https://images.unsplash.com/photo-1447958272669-9c562446304f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2800&q=80',
          },
        ],
        skus: {
          7: {
            quantity: 16,
            size: 'S',
          },
          8: {
            quantity: 8,
            size: 'XS',
          },
          9: {
            quantity: 17,
            size: 'M',
          },
          10: {
            quantity: 10,
            size: 'L',
          },
          11: {
            quantity: 15,
            size: 'XL',
          },
          12: {
            quantity: 6,
            size: 'XXL',
          },
        },
      },
      {
        style_id: 3,
        name: 'Ocean Blue & Grey',
        original_price: '140',
        sale_price: '100',
        'default?': 0,
        photos: [
          {
            thumbnail_url:
              'https://images.unsplash.com/photo-1556304653-cba65c59b3c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            url:
              'https://images.unsplash.com/photo-1556304653-cba65c59b3c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2761&q=80',
          },
          {
            thumbnail_url:
              'https://images.unsplash.com/photo-1544131750-2985d621da30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            url:
              'https://images.unsplash.com/photo-1544131750-2985d621da30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80',
          },
          {
            thumbnail_url:
              'https://images.unsplash.com/photo-1557760257-b02421ae77fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            url:
              'https://images.unsplash.com/photo-1557760257-b02421ae77fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80',
          },
          {
            thumbnail_url:
              'https://images.unsplash.com/photo-1551506448-074afa034c05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            url:
              'https://images.unsplash.com/photo-1551506448-074afa034c05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=938&q=80',
          },
          {
            thumbnail_url:
              'https://images.unsplash.com/photo-1556268652-ad74ebb8f1e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
            url:
              'https://images.unsplash.com/photo-1556268652-ad74ebb8f1e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
          },
          {
            thumbnail_url:
              'https://images.unsplash.com/photo-1557394976-32cc983558ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            url:
              'https://images.unsplash.com/photo-1557394976-32cc983558ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
          },
        ],
        skus: {
          13: {
            quantity: 8,
            size: 'XS',
          },
          14: {
            quantity: 16,
            size: 'S',
          },
          15: {
            quantity: 17,
            size: 'M',
          },
          16: {
            quantity: 10,
            size: 'L',
          },
          17: {
            quantity: 15,
            size: 'XL',
          },
          18: {
            quantity: 6,
            size: 'XXL',
          },
        },
      },
      {
        style_id: 4,
        name: 'Digital Red & Black',
        original_price: '140',
        sale_price: '0',
        'default?': 0,
        photos: [
          {
            thumbnail_url:
              'https://images.unsplash.com/photo-1530092376999-2431865aa8df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            url:
              'https://images.unsplash.com/photo-1530092376999-2431865aa8df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80',
          },
          {
            thumbnail_url:
              'https://images.unsplash.com/photo-1487174244970-cd18784bb4a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            url:
              'https://images.unsplash.com/photo-1487174244970-cd18784bb4a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80',
          },
          {
            thumbnail_url:
              'https://images.unsplash.com/photo-1488554378835-f7acf46e6c98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            url:
              'https://images.unsplash.com/photo-1488554378835-f7acf46e6c98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80',
          },
          {
            thumbnail_url:
              'https://images.unsplash.com/photo-1486025402772-bc179c8dfb0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            url:
              'https://images.unsplash.com/photo-1486025402772-bc179c8dfb0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
          },
          {
            thumbnail_url:
              'https://images.unsplash.com/photo-1473691955023-da1c49c95c78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            url:
              'https://images.unsplash.com/photo-1473691955023-da1c49c95c78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
          },
          {
            thumbnail_url:
              'https://images.unsplash.com/photo-1517456837005-d757b959ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60',
            url:
              'https://images.unsplash.com/photo-1517456837005-d757b959ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
          },
        ],
        skus: {
          19: {
            quantity: 8,
            size: 'XS',
          },
          20: {
            quantity: 16,
            size: 'S',
          },
          21: {
            quantity: 17,
            size: 'M',
          },
          22: {
            quantity: 10,
            size: 'L',
          },
          23: {
            quantity: 15,
            size: 'XL',
          },
          24: {
            quantity: 6,
            size: 'XXL',
          },
        },
      },
      {
        style_id: 5,
        name: 'Sky Blue & White',
        original_price: '140',
        sale_price: '100',
        'default?': 0,
        photos: [
          {
            thumbnail_url:
              'https://images.unsplash.com/photo-1448526478325-616f2b15b04e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            url:
              'https://images.unsplash.com/photo-1448526478325-616f2b15b04e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80',
          },
          {
            thumbnail_url:
              'https://images.unsplash.com/photo-1519098635131-4c8f806d1e82?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
            url:
              'https://images.unsplash.com/photo-1519098635131-4c8f806d1e82?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
          },
          {
            thumbnail_url:
              'https://images.unsplash.com/photo-1483056293146-9eac9521932f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            url:
              'https://images.unsplash.com/photo-1483056293146-9eac9521932f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80',
          },
          {
            thumbnail_url:
              'https://images.unsplash.com/photo-1515992854631-13de43baeba1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            url:
              'https://images.unsplash.com/photo-1515992854631-13de43baeba1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
          },
          {
            thumbnail_url:
              'https://images.unsplash.com/photo-1525141741567-f89ef016dfeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
            url:
              'https://images.unsplash.com/photo-1525141741567-f89ef016dfeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
          },
          {
            thumbnail_url:
              'https://images.unsplash.com/photo-1418985991508-e47386d96a71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            url:
              'https://images.unsplash.com/photo-1418985991508-e47386d96a71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
          },
        ],
        skus: {
          25: {
            quantity: 8,
            size: 'XS',
          },
          26: {
            quantity: 16,
            size: 'S',
          },
          27: {
            quantity: 17,
            size: 'M',
          },
          28: {
            quantity: 10,
            size: 'L',
          },
          29: {
            quantity: 15,
            size: 'XL',
          },
          30: {
            quantity: 6,
            size: 'XXL',
          },
        },
      },
      {
        style_id: 6,
        name: 'Dark Grey & Black',
        original_price: '170',
        sale_price: '0',
        'default?': 0,
        photos: [
          {
            thumbnail_url:
              'https://images.unsplash.com/photo-1514866726862-0f081731e63f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            url:
              'https://images.unsplash.com/photo-1514866726862-0f081731e63f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
          },
          {
            thumbnail_url:
              'https://images.unsplash.com/photo-1519689373023-dd07c7988603?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            url:
              'https://images.unsplash.com/photo-1519689373023-dd07c7988603?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
          },
          {
            thumbnail_url:
              'https://images.unsplash.com/photo-1506932248762-69d978912b80?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
            url:
              'https://images.unsplash.com/photo-1506932248762-69d978912b80?ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80',
          },
          {
            thumbnail_url:
              'https://images.unsplash.com/photo-1535639818669-c059d2f038e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            url:
              'https://images.unsplash.com/photo-1535639818669-c059d2f038e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
          },
          {
            thumbnail_url:
              'https://images.unsplash.com/photo-1498098662025-04e60a212db4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            url:
              'https://images.unsplash.com/photo-1498098662025-04e60a212db4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
          },
          {
            thumbnail_url:
              'https://images.unsplash.com/photo-1421941027568-40ab08ee5592?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            url:
              'https://images.unsplash.com/photo-1421941027568-40ab08ee5592?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80',
          },
        ],
        skus: {
          31: {
            quantity: 8,
            size: 'XS',
          },
          32: {
            quantity: 16,
            size: 'S',
          },
          33: {
            quantity: 17,
            size: 'M',
          },
          34: {
            quantity: 10,
            size: 'L',
          },
          35: {
            quantity: 15,
            size: 'XL',
          },
          36: {
            quantity: 6,
            size: 'XXL',
          },
        },
      },
    ],
  },

  getRelated: [2, 3, 8, 7],

  getReviews: {
    product: '85',
    page: 0,
    count: 5,
    results: [
      {
        review_id: 455,
        rating: 3,
        summary: 'Numquam et sit iure.',
        recommend: 1,
        response: 'null',
        body:
          'Unde necessitatibus tempore error molestiae eum velit doloremque at nesciunt. Nesciunt mollitia placeat culpa id dicta velit omnis aliquid. Alias sit qui debitis voluptas maxime qui repudiandae voluptas qui.',
        date: '2019-04-04T00:00:00.000Z',
        reviewer_name: 'Clara63',
        helpfulness: 19,
        photos: [
          {
            id: 210,
            url:
              'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
          },
        ],
      },
      {
        review_id: 452,
        rating: 1,
        summary:
          'Quis reprehenderit sapiente in perferendis doloremque sed non quia dolores.',
        recommend: 0,
        response: 'null',
        body:
          'Error et accusantium expedita quam maiores debitis impedit. Eaque numquam iusto. Quibusdam id excepturi sit et voluptatibus commodi odit quia in. Quibusdam aliquid quia consequatur maiores amet aperiam.',
        date: '2018-11-15T00:00:00.000Z',
        reviewer_name: 'Lila.Stoltenberg',
        helpfulness: 8,
        photos: [],
      },
      {
        review_id: 456,
        rating: 1,
        summary: 'Maxime et est est voluptas eligendi dicta.',
        recommend: 0,
        response: 'null',
        body:
          'Earum aut quas nostrum est. Quod aut temporibus. Qui dolor pariatur asperiores odit nulla recusandae. Quia et ut alias asperiores dolor.',
        date: '2018-11-14T00:00:00.000Z',
        reviewer_name: 'Amie.Rempel29',
        helpfulness: 18,
        photos: [],
      },
      {
        review_id: 453,
        rating: 2,
        summary:
          'Sed cupiditate sequi eos ut cum blanditiis magni repellendus.',
        recommend: 1,
        response: 'null',
        body:
          'Aspernatur quasi voluptas fuga exercitationem iste ut reprehenderit autem quis. Rerum rerum quae velit alias. Aut non iure perferendis.',
        date: '2018-10-23T00:00:00.000Z',
        reviewer_name: 'Allan26',
        helpfulness: 26,
        photos: [],
      },
      {
        review_id: 454,
        rating: 2,
        summary:
          'Iusto animi autem dolorem libero enim voluptatibus autem numquam.',
        recommend: 1,
        response: 'null',
        body:
          'Velit unde amet voluptatem doloremque deleniti explicabo corporis deserunt. Expedita praesentium perferendis dolorem sequi. Veritatis cum perspiciatis molestias rem eaque omnis.',
        date: '2018-09-22T00:00:00.000Z',
        reviewer_name: 'Ransom_Hayes',
        helpfulness: 6,
        photos: [
          {
            id: 209,
            url:
              'https://images.unsplash.com/photo-1522032238811-74bc59578599?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
          },
        ],
      },
    ],
  },

  getReviewsMeta: {
    product_id: '85',
    ratings: {
      1: 3,
      2: 2,
      3: 2,
    },
    recommended: {
      0: 3,
      1: 4,
    },
    characteristics: {
      Quality: {
        id: 262,
        value: '2.8571',
      },
    },
  },
};

export default sample;
