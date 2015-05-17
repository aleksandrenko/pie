Router.configure({
  layoutTemplate: 'pie'
});

Router.route('/', 'landingPage');

Router.route('/products/:category', function () {
  this.render('productsList', {
    data: function () {
      return {
        products: Products.find({ categories: this.params.category })
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
