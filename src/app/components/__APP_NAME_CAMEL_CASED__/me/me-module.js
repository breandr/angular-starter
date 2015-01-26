//import angular from 'angular';
import 'components/__APP_NAME_CAMEL_CASED__/api/api-module';
import 'components/__APP_NAME_CAMEL_CASED__/user/user-module';
import me from './me-factory';

let meModule = null;

try {
  angular.module('__APP_NAME_CAMEL_CASED__.me');
} catch (e) {
  meModule = angular.module('__APP_NAME_CAMEL_CASED__.me', [
    'LocalStorageModule',
    '__APP_NAME_CAMEL_CASED__.api',
    '__APP_NAME_CAMEL_CASED__.user'
  ])
    .factory('me', me);
}

export default meModule;
