var ProductsSchema = new SimpleSchema({
  name: {
    type: String,
    max: 80
  },
  brand: {
    type: String,
    max: 80
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
    optional: true
  },
  rating: {
    type: Number,
    decimal: true
  },
  image: {
    type: String
  }
});

Products = new Mongo.Collection('products');
Products.attachSchema(ProductsSchema);
