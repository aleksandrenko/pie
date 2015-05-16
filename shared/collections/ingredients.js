var IngredientsSchema = new SimpleSchema({
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

Ingredients = new Mongo.Collection("ingredients");
Ingredients.attachSchema(IngredientsSchema);
