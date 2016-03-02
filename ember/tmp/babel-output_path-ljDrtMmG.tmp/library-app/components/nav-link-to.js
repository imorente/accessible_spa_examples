define('library-app/components/nav-link-to', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].LinkComponent.extend({

        tagName: 'li',

        hrefForA: _ember['default'].computed('models', 'qualifiedRouteName', function computeLinkToComponentHref() {
            var qualifiedRouteName = this.get('qualifiedRouteName');
            var models = this.get('models');

            if (this.get('loading')) {
                return this.get('loadingHref');
            }

            var routing = this.get('_routing');
            var queryParams = this.get('queryParams.values');
            return routing.generateURL(qualifiedRouteName, models, queryParams);
        })
    });
});