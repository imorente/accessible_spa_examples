define('library-app/tests/controllers/admin/seeder.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers/admin');
  QUnit.test('controllers/admin/seeder.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/admin/seeder.js should pass jshint.');
  });
});