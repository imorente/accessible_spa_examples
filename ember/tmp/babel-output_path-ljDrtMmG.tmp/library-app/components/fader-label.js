define('library-app/components/fader-label', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'span',

    classNames: ['label label-success label-fade'],
    classNameBindings: ['isShowing:label-show'],

    isShowing: false,

    isShowingChanged: _ember['default'].observer('isShowing', function () {
      var _this = this;

      _ember['default'].run.later(function () {
        _this.set('isShowing', false);
      }, 3000);
    })
  });
});