//import angular from 'angular';
import formExtensions from './formExtensions-directive';

try {
  angular.module('__APP_NAME_CAMEL_CASED__.formExtensions');
} catch (e) {
  angular.module('__APP_NAME_CAMEL_CASED__.formExtensions', [])
    .directive('formExtensions', formExtensions);
}