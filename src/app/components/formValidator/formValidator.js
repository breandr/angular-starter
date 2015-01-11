//import angular from 'angular';
import FormValidatorFactory from './FormValidator-factory';

try {
  angular.module('__APP_NAME_CAMEL_CASED__.formValidator');
} catch (e) {
  angular.module('__APP_NAME_CAMEL_CASED__.formValidator', [])
    .factory('FormValidator', FormValidatorFactory);
}