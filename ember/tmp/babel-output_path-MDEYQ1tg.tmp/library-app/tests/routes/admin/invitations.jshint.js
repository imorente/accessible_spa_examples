define('library-app/tests/routes/admin/invitations.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/admin');
  QUnit.test('routes/admin/invitations.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/admin/invitations.js should pass jshint.\nroutes/admin/invitations.js: line 9, col 21, \'transition\' is defined but never used.\nroutes/admin/invitations.js: line 9, col 14, \'model\' is defined but never used.\n\n2 errors');
  });
});