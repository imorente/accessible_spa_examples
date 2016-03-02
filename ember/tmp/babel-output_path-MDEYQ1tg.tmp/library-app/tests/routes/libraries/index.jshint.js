define('library-app/tests/routes/libraries/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/libraries');
  QUnit.test('routes/libraries/index.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/libraries/index.js should pass jshint.\nroutes/libraries/index.js: line 10, col 21, \'transition\' is defined but never used.\nroutes/libraries/index.js: line 10, col 14, \'model\' is defined but never used.\n\n2 errors');
  });
});