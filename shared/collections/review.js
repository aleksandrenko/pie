var ReviewSchema = new SimpleSchema({
  author: {
    type: String
  },
  rating: {
    type: Number
  },
  text: {
    type: String,
    max: 480
  }
});

pie.db.Review = new Mongo.Collection("ingredient");
pie.db.Review.attachSchema(ReviewSchema);
