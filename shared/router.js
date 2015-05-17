Router.configure({
  layoutTemplate: 'pie'
});

Router.route('/', 'landingPage');

Router.route('/products/:category', function () {
  this.render('productsList', {
    data: function () {
      return {
        products: Products.find({ categories: this.params.category }, { sort: { rating: -1 }})
      };
    }
  });
});

Router.route('/product/:id', function () {
  this.render('product', {
    data: function () {
      return Products.findOne({ _id: this.params.id });
    }
  });
});

Router.route('/search/:criteria', function () {
  var criteria = new RegExp(this.params.criteria.split('-').join(' '), 'i');

  this.render('productsList', {
    data: function () {
      return {
        products: Products.find({
          $or: [
            { name: { $regex: criteria }},
            { brand: { $regex: criteria }}
          ]
        }, { sort: { rating: -1 }})
      };
    }
  });
});
