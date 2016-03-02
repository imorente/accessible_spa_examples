define('library-app/routes/contact', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({

    model: function model() {
      return this.store.createRecord('contact');
    },

    afterModel: function afterModel(model, transition) {
      console.log('content loaded');
    },

    actions: {

      sendMessage: function sendMessage(newContactMessage) {
        var _this = this;

        newContactMessage.save().then(function () {
          return _this.controller.set('responseMessage', true);
        });
      },

      willTransition: function willTransition() {
        var model = this.controller.get('model');

        if (model.get('isNew')) {
          model.destroyRecord();
        }

        this.controller.set('responseMessage', false);
      }
    }
  });
});