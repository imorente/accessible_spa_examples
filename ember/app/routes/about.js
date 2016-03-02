import Ember from 'ember';
import {announce_view_loaded} from './../helpers/utils';

export default Ember.Route.extend({
  renderTemplate() {
    this.render('about');
    Ember.run.scheduleOnce('afterRender', this, function() {
      announce_view_loaded();
    });
  }
});
