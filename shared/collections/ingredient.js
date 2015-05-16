var IngredientSchema = new SimpleSchema({
  name: {
    type: String,
    max: 80
  },
  description: {
    type: String,
    max: 240
  },
  category: {
    type: [String]
  },
  rating: {
    type: Number
  }
});

pie.db.Ingredient = new Mongo.Collection("ingredient");
pie.db.Ingredient.attachSchema(IngredientSchema);
