define('library-app/tests/helpers/resolver', ['exports', 'ember/resolver', 'library-app/config/environment'], function (exports, _emberResolver, _libraryAppConfigEnvironment) {

  var resolver = _emberResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _libraryAppConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _libraryAppConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});