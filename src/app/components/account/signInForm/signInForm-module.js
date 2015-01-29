//import angular from 'angular';
import 'components/me/me-module';
import signInFormDirective from './signInForm-directive';
import SignInFormCtrlFactory from './SignInFormCtrl-controller';

let signInFormModule = null;

try {
  angular.module('account.signInForm');
} catch (e) {
  signInFormModule = angular.module('account.signInForm', [
    'me'
  ])
  .constant('SIGN_IN_FORM_MODULE_PATH', 'components/account/signInForm')
    .directive('signInForm', signInFormDirective)
    .factory('SignInFormCtrl', SignInFormCtrlFactory);
}

export default signInFormModule;
