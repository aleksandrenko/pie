var ProductBrandSchema = new SimpleSchema({
  name: {
    type: String,
    max: 80,
    unique: true
  }
});

ProductBrand = new Mongo.Collection("product-brand");
ProductBrand.attachSchema(ProductBrandSchema);
