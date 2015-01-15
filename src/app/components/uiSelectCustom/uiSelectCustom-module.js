//import angular from 'angular';

try {
  angular.module('__APP_NAME_CAMEL_CASED__.uiSelectCustom');
} catch (e) {
  angular.module('__APP_NAME_CAMEL_CASED__.uiSelectCustom', [
    'ui.select',
    'ui.highlight',
    'ngSanitize'
  ]).config(function(uiSelectConfig){
    uiSelectConfig.refreshDelay = 500;
  })
  .filter('propsFilter', function () {
    /**
     * From https://github.com/angular-ui/ui-select/blob/master/examples/demo.js
     * AngularJS default filter with the following expression:
     * "person in people | filter: {name: $select.search, age: $select.search}"
     * performs a AND between 'name: $select.search' and 'age: $select.search'.
     * We want to perform a OR.
     */
    return function (items, props) {
      var out = [];

      if (angular.isArray(items)) {
        items.forEach(function (item) {
          var itemMatches = false;

          var keys = Object.keys(props);
          for (var i = 0; i < keys.length; i++) {
            var prop = keys[i];
            var text = props[prop].toLowerCase();
            if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
              itemMatches = true;
              break;
            }
          }

          if (itemMatches) {
            out.push(item);
          }
        });
      } else {
        // Let the output be the input untouched
        out = items;
      }

      return out;
    };
  });
}