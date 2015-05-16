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
  },
  createdAt: {
    type: Date
  }
});

Reviews = new Mongo.Collection("reviews");
Reviews.attachSchema(ReviewsSchema);
