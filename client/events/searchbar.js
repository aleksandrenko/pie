Template.searchbar.events({
  'submit form': function (event) {
    event.preventDefault();
    var criteria = event.target.criteria.value.split(' ').join('-');
    Router.go('/search/' + criteria);
  }
});
