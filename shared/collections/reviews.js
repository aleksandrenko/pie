var ReviewsSchema = new SimpleSchema({
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

Reviews = new Mongo.Collection("reviews");
Reviews.attachSchema(ReviewsSchema);
