define('library-app/tests/routes/admin/seeder.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/admin');
  QUnit.test('routes/admin/seeder.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/admin/seeder.js should pass jshint.\nroutes/admin/seeder.js: line 46, col 21, \'transition\' is defined but never used.\nroutes/admin/seeder.js: line 46, col 14, \'model\' is defined but never used.\n\n2 errors');
  });
});