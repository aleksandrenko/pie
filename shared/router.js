Router.configure({
  layoutTemplate: 'pie'
});

Router.route('/', 'landingPage');

Router.route('/products', 'productsList');

Router.route('/product/:id', function () {
  this.render('product', {
    data: function () {
      return Products.findOne({ _id: this.params.id });
    }
  });
});
