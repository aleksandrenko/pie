Router.configure({
  layoutTemplate: 'pie'
});

Router.route('/', 'landingPage');

Router.route('/products', 'productsList');
