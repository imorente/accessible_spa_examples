import Ember from 'ember';
import {announce_view_loaded} from './../../helpers/utils';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('contact');
  },
  renderTemplate() {
    this.render('admin/contacts');
    Ember.run.scheduleOnce('afterRender', this, function() {
      announce_view_loaded();
    });
  }
});
