define('library-app/routes/admin/contacts', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({

    model: function model() {
      return this.store.findAll('contact');
    },

    afterModel: function afterModel(model, transition) {
      console.log('admin:contacts loaded');
    }
  });
});