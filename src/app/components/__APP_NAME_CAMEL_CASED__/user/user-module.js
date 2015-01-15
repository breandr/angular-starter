//import angular from 'angular';
import 'components/__APP_NAME_CAMEL_CASED__/api/api';
import 'components/__APP_NAME_CAMEL_CASED__/users/users-module';
import UserFactory from './User-factory';

let userModule = null;

try {
  angular.module('__APP_NAME_CAMEL_CASED__.user');
} catch (e) {
  userModule = angular.module('__APP_NAME_CAMEL_CASED__.user', [
  '__APP_NAME_CAMEL_CASED__.api',
    '__APP_NAME_CAMEL_CASED__.users'
  ]).factory('User', UserFactory);
}

export default userModule;