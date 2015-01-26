//import angular from 'angular';
import 'components/__APP_NAME_CAMEL_CASED__/me/me-module';
import __APP_NAME_PASCAL_CASED__ResourceFactory from './__APP_NAME_PASCAL_CASED__Resource-factory';

let apiModule = null;

try {
  angular.module('__APP_NAME_CAMEL_CASED__.api');
} catch (e) {
  apiModule = angular.module('__APP_NAME_CAMEL_CASED__.api', [
    'LocalStorageModule',
    'ngMaterial',
    'ngResource',
    '__APP_NAME_CAMEL_CASED__.me'
  ])
    .factory('__APP_NAME_CAMEL_CASED__Resource', __APP_NAME_PASCAL_CASED__ResourceFactory)
    .constant('API_URL', 'http://api.__APP_NAME_CAMEL_CASED__.com')
}

export default apiModule;
