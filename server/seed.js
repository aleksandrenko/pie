Meteor.startup(function () {
  if (ProductCategories.find().count() === 0) {
    var categories = JSON.parse(Assets.getText('categories.json'));

    categories.forEach(function(cat){
      ProductCategories.insert(cat);
    });
  }

  if (Products.find().count() === 0) {
    var randomProducts = JSON.parse(Assets.getText('random-products.json'));
    var roobar = JSON.parse(Assets.getText('roobar.json'));
    var corny = JSON.parse(Assets.getText('corny.json'));
    var otherBars = JSON.parse(Assets.getText('bars.json'));

    roobar.concat(corny).concat(otherBars).concat(randomProducts).forEach(function (product) {
      Products.insert(product);
      ProductBrand.update({ name: product.brand }, { $set: { name: product.brand }}, { upsert: true });
      product.ingredients.forEach(function (ing) {
        Ingredients.update({ name: ing }, { $set: { name: ing }}, { upsert: true });
      });
    });
  }
});
