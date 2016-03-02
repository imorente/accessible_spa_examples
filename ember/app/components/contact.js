import Ember from 'ember';

export default Ember.Component.extend({
	init: Ember.on('didInsertElement', function() {
	  	console.log("contact didInsertElement");
	})

});
