define('library-app/controllers/admin/seeder', ['exports', 'ember', 'faker'], function (exports, _ember, _faker) {
  exports['default'] = _ember['default'].Controller.extend({

    libraries: [],
    books: [],
    authors: [],

    actions: {

      generateLibraries: function generateLibraries() {
        var counter = parseInt(this.get('librariesCounter'));

        for (var i = 0; i < counter; i++) {
          var isTheLast = i === counter - 1;
          this._saveRandomLibrary(isTheLast);
        }
      },

      deleteLibraries: function deleteLibraries() {
        this._destroyAll(this.get('libraries'));

        this.set('libDelDone', true);
      },

      generateBooksAndAuthors: function generateBooksAndAuthors() {
        var counter = parseInt(this.get('authorCounter'));

        for (var i = 0; i < counter; i++) {
          var isTheLast = i === counter - 1;
          var newAuthor = this._saveRandomAuthor(isTheLast);

          this._generateSomeBooks(newAuthor);
        }
      },

      deleteBooksAndAuthors: function deleteBooksAndAuthors() {
        this._destroyAll(this.get('books'));
        this._destroyAll(this.get('authors'));

        this.set('authDelDone', true);
      }
    },

    // Private methods

    _saveRandomLibrary: function _saveRandomLibrary(isLast) {
      var _this = this;

      var randomLibrary = this.store.createRecord('library').randomize();

      randomLibrary.save().then(function () {
        if (isLast) {
          _this.set('librariesCounter', 0);
          _this.set('libDone', true);
        }
      });
    },

    _saveRandomAuthor: function _saveRandomAuthor(isLast) {
      var _this2 = this;

      var newAuthor = this.store.createRecord('author').randomize();
      newAuthor.save().then(function () {
        if (isLast) {
          _this2.set('authorCounter', 0);
          _this2.set('authDone', true);
        }
      });
      return newAuthor;
    },

    _generateSomeBooks: function _generateSomeBooks(author) {
      var bookCounter = _faker['default'].random.number(10);

      for (var j = 0; j < bookCounter; j++) {
        var library = this._selectRandomLibrary();
        this.store.createRecord('book').randomize(author, library).save();
        author.save();
        library.save();
      }
    },

    _selectRandomLibrary: function _selectRandomLibrary() {
      var libraries = this.get('libraries');
      var librariesCounter = libraries.get('length');

      // Create a new array form ids
      var libraryIds = libraries.map(function (lib) {
        return lib.get('id');
      });
      var randomNumber = _faker['default'].random.number(librariesCounter - 1);

      var randomLibrary = libraries.findBy('id', libraryIds[randomNumber]);
      return randomLibrary;
    },

    _destroyAll: function _destroyAll(records) {
      records.forEach(function (item) {
        item.destroyRecord();
      });
    }

  });
});