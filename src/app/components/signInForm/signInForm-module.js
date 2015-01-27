//import angular from 'angular';
import 'components/me/me-module';
import signInFormDirective from './signInForm-directive';
import SignInFormCtrlFactory from './SignInFormCtrl-controller';

let signInFormModule = null;

try {
  angular.module('signInForm');
} catch (e) {
  signInFormModule = angular.module('signInForm', [
    'me'
  ])
  .constant('SIGN_IN_FORM_MODULE_PATH', 'components/signInForm')
    .directive('signInForm', signInFormDirective)
    .factory('SignInFormCtrl', SignInFormCtrlFactory);
}

export default signInFormModule;
