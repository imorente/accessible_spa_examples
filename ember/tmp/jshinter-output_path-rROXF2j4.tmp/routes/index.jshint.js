QUnit.module('JSHint - routes');
QUnit.test('routes/index.js should pass jshint', function(assert) { 
  assert.expect(1);
  assert.ok(false, 'routes/index.js should pass jshint.\nroutes/index.js: line 4, col 21, \'transition\' is defined but never used.\nroutes/index.js: line 4, col 14, \'model\' is defined but never used.\n\n2 errors'); 
});
