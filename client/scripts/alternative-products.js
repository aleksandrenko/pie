Template.alternativeProducts.helpers({
  alternative: function () {
    return Products.find({categories: {$in: this.categories}}, {sort: {rating: -1}, limit: 3});
  }
});
