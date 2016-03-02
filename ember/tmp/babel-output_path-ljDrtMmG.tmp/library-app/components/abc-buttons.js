define('library-app/components/abc-buttons', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({

    atoz: _ember['default'].computed(function () {
      // Source: http://stackoverflow.com/questions/12376870/create-an-array-of-characters-from-specified-range
      return Array.apply(null, { length: 26 }).map(function (x, i) {
        return String.fromCharCode(97 + i).toUpperCase();
      });
    })

  });
});