//import angular from 'angular';
import 'components/api/api-module';
import 'components/__APP_NAME_CAMEL_CASED__/users/users-module';
import UserFactory from './User-factory';

let userModule = null;

try {
  angular.module('__APP_NAME_CAMEL_CASED__.user');
} catch (e) {
  userModule = angular.module('__APP_NAME_CAMEL_CASED__.user', [
  'api',
    '__APP_NAME_CAMEL_CASED__.users'
  ]).factory('User', UserFactory);
}

export default userModule;
