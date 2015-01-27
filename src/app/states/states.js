//import angular from 'angular';
import './anonymous/anonymousState-module';
import './authenticated/authenticatedState-module';

try {
  angular.module('__APP_NAME_CAMEL_CASED__.states');
} catch (e) {
  angular.module('__APP_NAME_CAMEL_CASED__.states', [
    'ui.router',
    '__APP_NAME_CAMEL_CASED__.states.anonymous',
    '__APP_NAME_CAMEL_CASED__.states.authenticated'
  ]);
}
