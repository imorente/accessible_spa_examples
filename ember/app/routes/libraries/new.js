import Ember from 'ember';
import {announce_view_loaded} from './../../helpers/utils';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('library');
  },

  renderTemplate() {
    this.render('libraries/form');
    Ember.run.scheduleOnce('afterRender', this, function() {
      announce_view_loaded();
    });
  },

  setupController(controller, model) {
    this._super(controller, model);

    controller.set('title', 'Create a new library');
    controller.set('buttonLabel', 'Create');
  },

  actions: {

    saveLibrary(newLibrary) {
      newLibrary.save().then(() => this.transitionTo('libraries'));
    },

    willTransition() {
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      this.controller.get('model').rollbackAttributes();
    }
  }
});
