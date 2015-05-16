var IngredientCategorySchema = new SimpleSchema({
  name: {
    type: String,
    max: 80
  }
});

pie.db.IngredientCategory = new Mongo.Collection("ingredient-category");
pie.db.IngredientCategory.attachSchema(IngredientCategorySchema);
