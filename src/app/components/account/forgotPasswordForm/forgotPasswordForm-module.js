//import angular from 'angular';
import forgotPasswordFormDirective from './forgotPasswordForm-directive';
import ForgotPasswordFormCtrlFactory from './ForgotPasswordFormCtrl-controller';

let forgotPasswordFormModule = null;

try {
  angular.module('account.forgotPasswordForm');
} catch (e) {
  forgotPasswordFormModule = angular.module('account.forgotPasswordForm', [])
  .constant('FORGOT_PASSWORD_FORM_MODULE_PATH', 'components/account/forgotPasswordForm')
    .directive('forgotPasswordForm', forgotPasswordFormDirective)
    .factory('ForgotPasswordFormCtrl', ForgotPasswordFormCtrlFactory);
}

export default forgotPasswordFormModule;
