//import angular from 'angular';
import 'components/__APP_NAME_CAMEL_CASED__/api/api-module';
import 'components/__APP_NAME_CAMEL_CASED__/user/user-module';
import signedInUser from './signedInUser-factory';

try {
  angular.module('__APP_NAME_CAMEL_CASED__.signedInUser');
} catch (e) {
  angular.module('__APP_NAME_CAMEL_CASED__.signedInUser', [
    'LocalStorageModule',
    '__APP_NAME_CAMEL_CASED__.api',
    '__APP_NAME_CAMEL_CASED__.user'
  ])
    .factory('signedInUser', signedInUser);
}