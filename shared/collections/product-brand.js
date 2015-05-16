var ProductBrandSchema = new SimpleSchema({
  name: {
    type: String,
    max: 80,
    optional: false
  }
});

ProductBrand = new Mongo.Collection("product-brand");
ProductBrand.attachSchema(ProductBrandSchema);
