//import angular from 'angular';
import CsnetApi from './csnetApi-factory';

try {
  angular.module('csnet.api');
} catch (e) {
  angular.module('csnet.api', [
    'LocalStorageModule',
    'restangular'
  ])
  .factory('CsnetApi', CsnetApi)
  // API_ENDPOINT is used for
  .constant("API_ENDPOINT", "http://api.csnet.net.au")
  .constant("API_SERVER", "http://api.csnet.net.au")
  ;
}