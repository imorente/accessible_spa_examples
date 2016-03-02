define('library-app/routes/libraries/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({

    queryParams: {
      limit: { refreshModel: true },
      letter: { refreshModel: true }
    },

    afterModel: function afterModel(model, transition) {
      console.log('libraries loaded');
    },

    model: function model(params) {

      if (params.limit === 'all') {
        return this.store.findAll('library');
      }

      return this.store.query('library', {
        orderBy: 'name',
        startAt: params.letter,
        endAt: params.letter + ''
      });
    },

    actions: {

      deleteLibrary: function deleteLibrary(library) {
        var confirmation = confirm('Are you sure?');

        if (confirmation) {
          library.destroyRecord();
        }
      }
    }

  });
});