Template.reviewsSidebar.helpers({
  getReviews: function () {
    return [
      {
        author: 'Viktor Dimchev',
        rating: 7.3,
        createdAt: new Date(2015, 2, 22, 11, 7),
        text: 'Maecenas sit amet auctor urna. Phasellus bibendum, nibh vel placerat tincidunt,' +
        'tortor felis eleifend turpis, sodales posuere ante enim quis dui. Nulla id velit' +
        'nec ex lobortis ornare. Curabitur scelerisque felis nec orci blandit condimentum.' +
        'Pellentesque hendrerit ex at libero tincidunt lobortis. Integer viverra tellus a' +
        'rutrum blandit. Sed placerat purus hendrerit faucibus scelerisque.',
        avatar: 'avatar-sample1'
      },
      {
        author: 'Adrian Bobev',
        rating: 6.5,
        createdAt: new Date(2015, 2, 20, 14, 22),
        text: 'Maecenas sit amet auctor urna. Phasellus bibendum, nibh vel placerat tincidunt,' +
        'tortor felis eleifend turpis, sodales posuere ante enim quis dui. Nulla id velit' +
        'nec ex lobortis ornare. Curabitur scelerisque felis nec orci blandit condimentum.' +
        'Pellentesque hendrerit ex at libero tincidunt lobortis. Integer viverra tellus a' +
        'rutrum blandit. Sed placerat purus hendrerit faucibus scelerisque.',
        avatar: 'avatar-sample2'
      }
    ];
  }
});
