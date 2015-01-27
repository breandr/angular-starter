//import angular from 'angular';
import 'components/api/api-module';
import 'components/__APP_NAME_CAMEL_CASED__/user/user-module';
import UsersFactory from './Users-factory';

let usersModule = null;

try {
  angular.module('__APP_NAME_CAMEL_CASED__.users');
} catch (e) {
  usersModule = angular.module('__APP_NAME_CAMEL_CASED__.users', [
    'api',
    '__APP_NAME_CAMEL_CASED__.user'
  ]).factory('Users', UsersFactory);
}

export default usersModule;
