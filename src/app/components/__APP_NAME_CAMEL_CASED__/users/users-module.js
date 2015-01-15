//import angular from 'angular';
import 'components/__APP_NAME_CAMEL_CASED__/api/api-module';
import 'components/__APP_NAME_CAMEL_CASED__/user/user-module';
import UsersFactory from './Users-factory';

try {
  angular.module('__APP_NAME_CAMEL_CASED__.users');
} catch (e) {
  angular.module('__APP_NAME_CAMEL_CASED__.users', [
    '__APP_NAME_CAMEL_CASED__.api',
    '__APP_NAME_CAMEL_CASED__.user'
  ]).factory('Users', UsersFactory);
}