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
          'Second Blends Apple & Carrot',
          'Second Blends Pear & Mango',
          'Tots, Mish Mash Peach',
          'Tots, Mish Mash Strawberry',
          'Second Blends Blueberry, Pear & Purple Carrot',
          'Second Blends Broccoli & Apple',
          'Fruit & Grain Mish Mash Apple Cinnamon Oats & Quinoa',
          'Just Mangos',
          'Just Peaches',
          'Fruit & Veggie Mashups Carroty Chop',
          'Hello Morning Blueberry, Banana, & Quinoa Oatmeal',
          'Hello Morning Cherries & Oats',
          'Hello Morning Pears & Quinoa',
          'Just Veggies Butternut Squash',
          'Just Veggies Carrots'
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
});
