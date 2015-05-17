Template.productInList.helpers({
  getColor: function (rating) {
    var rating = rating | 0;
    var color = 'great';

    if(rating < 5) {
      color = 'worst'
    } else if(rating < 6) {
      color = 'bad';
    } else if(rating < 7) {
      color = 'ok'
    } else if(rating < 8) {
      color = 'good'
    }

    return color;
  }
});
