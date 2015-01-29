//import angular from 'angular';
import resetPasswordFormDirective from './resetPasswordForm-directive';
import ResetPasswordFormCtrlFactory from './ResetPasswordFormCtrl-controller';

let resetPasswordFormModule = null;

try {
  angular.module('account.resetPasswordForm');
} catch (e) {
  resetPasswordFormModule = angular.module('account.resetPasswordForm', [])
  .constant('RESET_PASSWORD_FORM_MODULE_PATH', 'components/account/resetPasswordForm')
    .directive('resetPasswordForm', resetPasswordFormDirective)
    .factory('ResetPasswordFormCtrl', ResetPasswordFormCtrlFactory);
}

export default resetPasswordFormModule;
