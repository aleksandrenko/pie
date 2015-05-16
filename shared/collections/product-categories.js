var ProductCategoriesSchema = new SimpleSchema({
  name: {
    type: String,
    max: 80
  },
  color: {
    type: String,
    max: 20
  },
  subcategories: {
    type: [String]
  }
});

ProductCategories = new Mongo.Collection("product-categories");
ProductCategories.attachSchema(ProductCategoriesSchema);
