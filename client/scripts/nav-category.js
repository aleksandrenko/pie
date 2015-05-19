Template.navCategory.helpers({
  subcategory: function () {
    return this.subcategories;
  }
});

Template.navCategory.events({
  'click category': function (event) {
    if (event.target.getAttribute('selected')) {
      event.target.removeAttribute('selected');
    } else {
      unselectAllCategories();
      event.target.setAttribute('selected', 'true');
    }
  },

  'click overlay': function (event) {
    unselectAllCategories();
  }
});

function unselectAllCategories() {
  var categories = document.querySelectorAll('nav category');

  [].forEach.call(categories, function (cat) {
    cat.removeAttribute('selected');
  });
}
