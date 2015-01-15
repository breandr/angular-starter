//import angular from 'angular';
import 'components/formValidator/formValidator';
import __APP_NAME_CAMEL_CASED__SignIn from './signIn-directive';

try {
  angular.module('__APP_NAME_CAMEL_CASED__.signIn');
} catch (e) {
  angular.module('__APP_NAME_CAMEL_CASED__.signIn', [
    '__APP_NAME_CAMEL_CASED__.signedInUser',
    '__APP_NAME_CAMEL_CASED__.formValidator'
  ])
  .constant('signInModulePath', 'components/__APP_NAME_CAMEL_CASED__/signIn')
    .directive('__APP_NAME_CAMEL_CASED__SignIn', __APP_NAME_CAMEL_CASED__SignIn);
}