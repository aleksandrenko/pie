//duplicated

Template.review.helpers({
  getColor: function(rating) {
    var color = 'one';

    if(rating >= 9.5) {
      color = 'ten';
    } else if(rating >= 8.5) {
      color = 'nine';
    } else if(rating >= 7.5) {
      color = 'eight';
    } else if(rating >= 6.5) {
      color = 'seven';
    } else if(rating >= 5.5) {
      color = 'six';
    } else if(rating >= 4.5) {
      color = 'five';
    } else if(rating >= 3.5) {
      color = 'four';
    } else if(rating >= 2.5) {
      color = 'three';
    } else if(rating >= 1.5) {
      color = 'two';
    }

    return color;
  }
});
