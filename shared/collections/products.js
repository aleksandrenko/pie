var ProductsSchema = new SimpleSchema({
  name: {
    type: String,
    max: 80,
    optional: false
  },
  categories: {
    type: [String],
    index: true
  },
  ingredients: {
    type: [String],
    index: true
  },
  reviews: {
    type: [String],
  },
  rating: {
    type: Number
  },
  image: {
    type: String
  }
});

Products = new Mongo.Collection('products');
Products.attachSchema(ProductsSchema);
