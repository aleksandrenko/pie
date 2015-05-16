var ProductCategorySchema = new SimpleSchema({
  name: {
    type: String,
    max: 80
  },
  subcategories: {
    type: [String]
  }
});

pie.db.ProductCategory = new Mongo.Collection("product-category");
pie.db.ProductCategory.attachSchema(ProductCategorySchema);
