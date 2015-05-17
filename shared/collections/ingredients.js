var IngredientsSchema = new SimpleSchema({
  name: {
    type: String,
    max: 80,
    unique: true
  },
  description: {
    type: String,
    max: 240,
    optional: true
  },
  category: {
    type: [String],
    optional: true
  },
  rating: {
    type: Number,
    optional: true
  }
});

Ingredients = new Mongo.Collection("ingredients");
Ingredients.attachSchema(IngredientsSchema);
