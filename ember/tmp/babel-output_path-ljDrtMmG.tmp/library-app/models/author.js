define('library-app/models/author', ['exports', 'ember-data', 'faker'], function (exports, _emberData, _faker) {
  exports['default'] = _emberData['default'].Model.extend({

    name: _emberData['default'].attr('string'),
    books: _emberData['default'].hasMany('book', { inverse: 'author' }),

    randomize: function randomize() {
      this.set('name', _faker['default'].name.findName());
      return this;
    }

  });
});