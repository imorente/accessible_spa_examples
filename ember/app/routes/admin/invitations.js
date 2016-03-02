import Ember from 'ember';
import {announce_view_loaded} from './../../helpers/utils';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('invitation');
  },
  renderTemplate() {
    this.render('admin/invitations');
    Ember.run.scheduleOnce('afterRender', this, function() {
      announce_view_loaded();
    });
  }
});
