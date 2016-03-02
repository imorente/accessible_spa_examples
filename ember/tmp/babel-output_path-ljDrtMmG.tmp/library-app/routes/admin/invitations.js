define('library-app/routes/admin/invitations', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({

    model: function model() {
      return this.store.findAll('invitation');
    },

    afterModel: function afterModel(model, transition) {
      console.log('admin:invitations loaded');
    }

  });
});