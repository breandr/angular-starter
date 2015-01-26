//import angular from 'angular';
import __APP_NAME_CAMEL_CASED__SignInForm from './signInForm-directive';
import SignInFormCtrlFactory from './SignInFormCtrl-controller';

let signInFormModule = null;

try {
  angular.module('__APP_NAME_CAMEL_CASED__.signInForm');
} catch (e) {
  signInFormModule = angular.module('__APP_NAME_CAMEL_CASED__.signInForm', [
    '__APP_NAME_CAMEL_CASED__.me'
  ])
  .constant('SIGN_IN_FORM_MODULE_PATH', 'components/__APP_NAME_CAMEL_CASED__/signInForm')
    .directive('signInForm', __APP_NAME_CAMEL_CASED__SignInForm)
    .factory('SignInFormCtrl', SignInFormCtrlFactory);
}

export default signInFormModule;
