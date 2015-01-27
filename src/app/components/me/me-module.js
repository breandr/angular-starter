//import angular from 'angular';
import 'components/api/api-module';
import 'components/__APP_NAME_CAMEL_CASED__/user/user-module';
import me from './me-factory';

let meModule = null;

try {
  angular.module('me');
} catch (e) {
  meModule = angular.module('me', [
    'LocalStorageModule',
    'api',
    '__APP_NAME_CAMEL_CASED__.user'
  ])
    .factory('me', me);
}

export default meModule;
