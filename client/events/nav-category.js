function _unselectAllCategories() {
  var categories = document.querySelectorAll('nav category');

  for (i = 0; i < categories.length; ++i) {
    categories[i].removeAttribute('selected');
  }
}

Template.navCategory.events({
  "click category": function(event, template) {
    _unselectAllCategories();
    event.target.setAttribute('selected', 'true');
  },

  "click overlay": function(event, template) {
    _unselectAllCategories();
  }
});
