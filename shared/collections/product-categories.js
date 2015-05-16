var ProductCategoriesSchema = new SimpleSchema({
  name: {
    type: String,
    max: 80
  },
  subcategories: {
    type: [String]
  }
});

ProductCategories = new Mongo.Collection("product-categories");
ProductCategories.attachSchema(ProductCategoriesSchema);
