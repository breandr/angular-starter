//import angular from 'angular';
import 'components/me/me-module';
import ResourceFactory from './Resource-factory';

let apiModule = null;

try {
  angular.module('api');
} catch (e) {
  apiModule = angular.module('api', [
    'LocalStorageModule',
    'ngMaterial',
    'ngResource',
    'me'
  ])
    .factory('Resource', ResourceFactory)
    .constant('API_URL', 'http://api.__APP_NAME_CAMEL_CASED__.com')
}

export default apiModule;
