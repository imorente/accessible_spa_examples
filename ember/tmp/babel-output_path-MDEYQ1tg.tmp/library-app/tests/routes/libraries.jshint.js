define('library-app/tests/routes/libraries.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/libraries.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/libraries.js should pass jshint.');
  });
});