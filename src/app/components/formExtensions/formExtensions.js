//import angular from 'angular';
import formExtensions from './formExtensions-directive';

try {
  angular.module('csnet.formExtensions');
} catch (e) {
  angular.module('csnet.formExtensions', [])
    .directive('formExtensions', formExtensions);
}