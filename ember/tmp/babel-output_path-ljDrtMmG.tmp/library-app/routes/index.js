define('library-app/routes/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    afterModel: function afterModel(model, transition) {
      console.log('index loaded');
    }
  });
});