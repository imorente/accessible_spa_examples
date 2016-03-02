define('library-app/tests/components/abc-buttons.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components');
  QUnit.test('components/abc-buttons.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/abc-buttons.js should pass jshint.');
  });
});