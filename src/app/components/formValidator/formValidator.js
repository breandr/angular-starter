//import angular from 'angular';
import FormValidatorFactory from './FormValidator-factory';

try {
  angular.module('csnet.formValidator');
} catch (e) {
  angular.module('csnet.formValidator', [])
    .factory('FormValidator', FormValidatorFactory);
}