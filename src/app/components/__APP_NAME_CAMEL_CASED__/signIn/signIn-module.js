//import angular from 'angular';
import 'components/formValidator/formValidator';
import __APP_NAME_CAMEL_CASED__SignIn from './signIn-directive';
import SignInCtrlFactory from './SignInCtrl-controller';

try {
  angular.module('__APP_NAME_CAMEL_CASED__.signIn');
} catch (e) {
  angular.module('__APP_NAME_CAMEL_CASED__.signIn', [
    '__APP_NAME_CAMEL_CASED__.me',
    '__APP_NAME_CAMEL_CASED__.formValidator'
  ])
  .constant('SIGN_IN_FORM_MODULE_PATH', 'components/__APP_NAME_CAMEL_CASED__/signIn')
    .directive('signInForm', __APP_NAME_CAMEL_CASED__SignIn)
    .factory('SignInCtrl', SignInCtrlFactory);
}