import Ember from 'ember';
import {announce_view_loaded} from './../helpers/utils';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('contact');
  },
  /* Begin -=THE MAGIC=- */
  renderTemplate() {
    this.render('contact');
    Ember.run.scheduleOnce('afterRender', this, function() {
      announce_view_loaded();
    });
  },

  actions: {

    sendMessage(newContactMessage) {
      newContactMessage.save().then(() => this.controller.set('responseMessage', true));
    },

    willTransition() {
      let model = this.controller.get('model');

      if (model.get('isNew')) {
        model.destroyRecord();
      }

      this.controller.set('responseMessage', false);
    }
  }
});
