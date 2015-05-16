var ProductSchema = new SimpleSchema({
  name: {
    type: String,
    max: 80,
    required: true
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

pie.db.Product = new Mongo.Collection('product');
pie.db.Product.attachSchema(ProductSchema);
