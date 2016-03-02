define('library-app/tests/components/number-box.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components');
  QUnit.test('components/number-box.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/number-box.js should pass jshint.');
  });
});