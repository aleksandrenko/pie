var ProductBrandSchema = new SimpleSchema({
  name: {
    type: String,
    max: 80
  }
});

ProductBrand = new Mongo.Collection("product-brand");
ProductBrand.attachSchema(ProductBrandSchema);
