QUnit.module('JSHint - routes');
QUnit.test('routes/about.js should pass jshint', function(assert) { 
  assert.expect(1);
  assert.ok(false, 'routes/about.js should pass jshint.\nroutes/about.js: line 4, col 21, \'transition\' is defined but never used.\nroutes/about.js: line 4, col 14, \'model\' is defined but never used.\n\n2 errors'); 
});
