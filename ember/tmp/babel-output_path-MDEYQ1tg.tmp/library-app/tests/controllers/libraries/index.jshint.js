define('library-app/tests/controllers/libraries/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers/libraries');
  QUnit.test('controllers/libraries/index.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/libraries/index.js should pass jshint.');
  });
});