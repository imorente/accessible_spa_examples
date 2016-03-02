define('library-app/controllers/libraries/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({

    queryParams: ['filter', 'limit', 'letter'],
    filter: '',
    letter: '',
    limit: 'all',

    limitAll: _ember['default'].computed.equal('limit', 'all'),

    filteredList: _ember['default'].computed('model.@each.name', 'filter', function () {

      var results = this.get('model');
      var query = this.get('filter');

      if (!!query) {
        (function () {
          // One of the best regular expression website: http://www.regexr.com/
          // Split the query at spaces and join them to get like this: /(word1)+.*(word2)+.*(word3)+.*/ig
          var regexString = '(' + query.split(' ').join(')+.*(') + ')+.*';
          // i: case insensitive, g: global
          var regex = new RegExp(regexString, 'ig');

          results = results.filter(function (item) {
            return item.get('name').match(regex);
          });
        })();
      }

      return results.sortBy('name');
    })

  });
});