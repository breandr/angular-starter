//import angular from 'angular';
import __APP_NAME_PASCAL_CASED__Api from './__APP_NAME_CAMEL_CASED__Api-factory';

try {
  angular.module('__APP_NAME_CAMEL_CASED__.api');
} catch (e) {
  angular.module('__APP_NAME_CAMEL_CASED__.api', [
    'LocalStorageModule',
    'restangular'
  ])
  .factory('__APP_NAME_PASCAL_CASED__Api', __APP_NAME_PASCAL_CASED__Api)
  // API_ENDPOINT is used for
  .constant("API_ENDPOINT", "http://api.__APP_NAME_CAMEL_CASED__.net.au")
  .constant("API_SERVER", "http://api.__APP_NAME_CAMEL_CASED__.net.au")
  ;
}