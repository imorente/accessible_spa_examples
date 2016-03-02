define('library-app/routes/admin/seeder', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({

    // You can use these lines to experiment with route hooks.
    // Uncomment these and comment out the real implementation below.
    // Open inspection console in your browser and check how Ember call
    // each hook automatically.
    //
    //init() {
    //  debugger;
    //},
    //
    //beforeModel() {
    //  debugger;
    //},
    //
    //model() {
    //  debugger;
    //},
    //
    //afterModel() {
    //  debugger;
    //},
    //
    //setupController() {
    //  debugger;
    //},
    //
    //renderTemplate() {
    //  debugger;
    //},
    //
    //activate() {
    //  debugger;
    //}

    model: function model() {
      return _ember['default'].RSVP.hash({
        libraries: this.store.findAll('library'),
        books: this.store.findAll('book'),
        authors: this.store.findAll('author')
      });
    },

    afterModel: function afterModel(model, transition) {
      console.log('admin:seeder loaded');
    },

    setupController: function setupController(controller, model) {
      this._super(controller, model);
      controller.set('libraries', model.libraries);
      controller.set('books', model.books);
      controller.set('authors', model.authors);
    }
  });
});