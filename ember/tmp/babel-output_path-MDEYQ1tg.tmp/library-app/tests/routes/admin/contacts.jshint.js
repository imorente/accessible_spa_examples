define('library-app/tests/routes/admin/contacts.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/admin');
  QUnit.test('routes/admin/contacts.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/admin/contacts.js should pass jshint.\nroutes/admin/contacts.js: line 9, col 21, \'transition\' is defined but never used.\nroutes/admin/contacts.js: line 9, col 14, \'model\' is defined but never used.\n\n2 errors');
  });
});