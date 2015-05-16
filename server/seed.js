Meteor.startup(function () {
  if (ProductCategories.find().count() === 0) {
    [
      {
        name: 'Cosmetics',
        color: 'blue',
        subcategories: [
          'After Shave',
          'Body Wash & Cleanser',
          'Deodorants & Antiperspirants',
          'Eye & Ear Care',
          'Makeup',
          'Medicine Cabinet',
          'Mouthwash',
          'Shampoo',
          'Shaving Cream',
          'Skin Care',
          'Soap',
          'Sunscreen SPF 15 and Above',
          'Tampons',
          'Toothpaste'
        ]
      },
      {
        name: 'Food',
        color: 'green',
        subcategories: [
          'Batters, Breadings & Coaters',
          'Biscuit & Scone Mixes',
          'Brownies',
          'Cakes',
          'Cinnamon Rolls, Sweet Dough & Danish',
          'Cookies',
          'Croissants & Breads',
          'Donuts',
          'Extracts, Emulsions & Colors',
          'Fillings',
          'Frostings, Specialty Donut and Cake Icings',
          'Fruit Bit Concentrates',
          'Glazes',
          'Griddle Mixes – Pancake & Waffle',
          'Icing & Glaze Stabilizers',
          'Latino Products',
          'Miscellaneous',
          'Muffins',
          'Puff Dough',
          'Spreads & Smears'
        ]
      },
      {
        name: 'Baby food & cosmetics',
        color: 'pink',
        subcategories: [
          'Blends',
          'Second Blends',
          'Tots',
          'Mish Mash',
          'Fruit',
          'Grain',
          'Veggie',
          'Mashups',
          'Oats',
        ]
      }
    ].forEach(function(cat){
      ProductCategories.insert(cat);
    });
  }

  if (ProductBrand.find().count() === 0) {
    [
      'Pantene Pro-V',
      'Suave',
      'L\'Oreal',
      'Herbal Essences',
      'VO5',
      'Matrix',
      'Dove',
      'John Frieda',
      'TRE Semme'
    ].forEach(function (brand) {
      ProductBrand.insert({ name: brand });
    });
  }

  if (Products.find().count() === 0) {
    [
      {
        name: 'Hand Care Pro',
        brand: 'Herbal Essences',
        categories: ['Skin Care'],
        ingredients: [
          'Purified Water',
          'Cyclomethicone',
          'Aluminum/Magnesium Hydroxide Stearate',
          'Hyaluronic Acid',
          'Cholesterol',
          'Sodium Lauroyl Lactylate',
          'Carbomer',
          'Xanthan Gum'
        ],
        rating: 7.8,
        image: 'sample-product-1',
      },
      {
        name: 'No Gums',
        brand: 'VO5',
        categories: ['Toothpaste'],
        ingredients: [
          'Sodium monofluorophosphate 0.45%',
          'Water',
          'Glycerin',
          'Sorbitol',
          'Sodium lauryl sulfate',
          'Cellulose gum'
        ],
        rating: 6.3,
        image: 'sample-product-2',
      },
      {
        name: 'No Gums Pro',
        brand: 'VO5',
        categories: ['Toothpaste'],
        ingredients: [
          'Sodium monofluorophosphate 0.45%',
          'Water',
          'Glycerin',
          'Sorbitol',
          'Sodium lauryl sulfate',
          'Cellulose gum',
          'Tetrapotassium pyrophosphate',
          'Sodium saccharin'
        ],
        rating: 8.1,
        image: 'sample-product-3',
      },
      {
        name: 'Salt Of The Earth',
        brand: 'TRE Semme',
        categories: ['Body Wash & Cleanser'],
        ingredients: [
          'Water',
          'Glycerin',
          'Sodium chloride',
          'Sodium citrate',
          'Sodium lauryl sulfate',
          'Colorant',
          'Fragrance',
          'Cocamidopropyl betaine'
        ],
        rating: 8.8,
        image: 'sample-product-4',
      },
      {
        name: 'Castar Oil',
        brand: 'Matrix',
        categories: ['Body Wash & Cleanser'],
        ingredients: [
          'Water',
          'Methylchoroisothiazolinone',
          'Sodium chloride',
          'Sodium citrate',
          'Methylisothiazolinone',
          'Sodium lauryl sulfate',
          'Colorant',
          'Tocopheryl acetate',
          'Cocamidopropyl betaine'
        ],
        rating: 7.5,
        image: 'sample-product-5',
      },
      {
        name: 'Morava',
        brand: 'Dove',
        categories: ['Soap'],
        ingredients: [
          'Sodium Lauroyl Isethionate',
          'Stearic Acid',
          'Sodium Tallowate',
          'Sodium Palmitate',
          'Lauric Acid',
          'Sodium Isethionate',
          'Water',
          'Sodium Stearate',
          'Cocamidopropyl Betaine',
          'Sodium Cocoate'
        ],
        rating: 8.9,
        image: 'sample-product-6',
      },
      {
        name: 'Lavender Oil',
        brand: 'Suave',
        categories: ['Medicine Cabinet'],
        ingredients: [
          'Lavender oil',
          'Therapeutic-grade essential oil',
        ],
        rating: 5.2,
        image: 'sample-product-7',
      },
      {
        name: 'Khadi',
        brand: 'John Frieda',
        categories: ['Shampoo'],
        ingredients: [
          'Ammonium chloride',
          'Ammonium lauryl sulfate',
          'Glycol',
          'Sodium lauryl sulfate',
          'Sodium lauroamphoacetate'
        ],
        rating: 4.4,
        image: 'sample-product-8',
      },
      {
        name: 'Alleya Nutric',
        brand: 'L\'Oreal',
        categories: ['Eye & Ear Care'],
        ingredients: [
          'Ammonium chloride',
          'Ammonium lauryl sulfate',
          'Glycol',
          'Lauric Acid',
          'Sodium Isethionate',
          'Water',
          'Sodium lauryl sulfate',
          'Sodium lauroamphoacetate'
        ],
        rating: 6.4,
        image: 'sample-product-9',
      },
      {
        name: 'Aloe Vera',
        brand: 'Pantene Pro-V',
        categories: ['Pantene Pro-V'],
        ingredients: [
          'Aloe vera gel (organic)',
          'Deionized water',
          'Safflower oil',
          'Sorbitol',
          'Glyceryl stearate',
          'PEG-100 stearate',
          'Cetyl alcohol',
          'Stearic acid',
          'Triethanolamine',
          'Panthenol (provitamin B5)'
        ],
        rating: 9.4,
        image: 'sample-product-10',
      }
    ].forEach(function (product) {
      Products.insert(product);
    });
  }
});
