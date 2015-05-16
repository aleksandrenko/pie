var IngredientCategoriesSchema = new SimpleSchema({
  name: {
    type: String,
    max: 80
  }
});

IngredientCategories = new Mongo.Collection("ingredient-categories");
IngredientCategories.attachSchema(IngredientCategoriesSchema);
