define('library-app/routes/about', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    afterModel: function afterModel(model, transition) {
      console.log('about loaded');
    }
  });
});