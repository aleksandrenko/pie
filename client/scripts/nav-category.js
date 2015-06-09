Template.navCategory.helpers({
  subcategory: function () {
    return this.subcategories;
  }
});

Template.navCategory.events({
  'click name': function (event) {
    if (event.target.parentNode.getAttribute('selected')) {
      event.target.parentNode.removeAttribute('selected');
    } else {
      unselectAllCategories();
      event.target.parentNode.setAttribute('selected', 'true');
    }
  },

  'click subnav': function (event) {
    unselectAllCategories();
  }
});

function unselectAllCategories() {
  var categories = document.querySelectorAll('nav category');

  [].forEach.call(categories, function (cat) {
    cat.removeAttribute('selected');
  });
}
