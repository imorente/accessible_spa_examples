QUnit.module('JSHint - routes');
QUnit.test('routes/contact.js should pass jshint', function(assert) { 
  assert.expect(1);
  assert.ok(false, 'routes/contact.js should pass jshint.\nroutes/contact.js: line 9, col 21, \'transition\' is defined but never used.\nroutes/contact.js: line 9, col 14, \'model\' is defined but never used.\n\n2 errors'); 
});
