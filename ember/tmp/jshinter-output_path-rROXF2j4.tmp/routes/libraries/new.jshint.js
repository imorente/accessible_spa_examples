QUnit.module('JSHint - routes/libraries');
QUnit.test('routes/libraries/new.js should pass jshint', function(assert) { 
  assert.expect(1);
  assert.ok(false, 'routes/libraries/new.js should pass jshint.\nroutes/libraries/new.js: line 9, col 21, \'transition\' is defined but never used.\nroutes/libraries/new.js: line 9, col 14, \'model\' is defined but never used.\n\n2 errors'); 
});
