//import angular from 'angular';
import 'components/account/resetPasswordForm/resetPasswordForm-module';

try {
  angular.module('__APP_NAME_CAMEL_CASED__.states.anonymous.accounts.resetPassword');
} catch (e) {
  angular.module('__APP_NAME_CAMEL_CASED__.states.anonymous.accounts.resetPassword', [
    'account.resetPasswordForm',
    'me'
  ])
    .constant('PATH_TO_RESET_PASSWORD_STATE', 'states/anonymous/accounts/resetPassword')
    .config(function ($stateProvider, PATH_TO_RESET_PASSWORD_STATE) {
      $stateProvider
        .state('anonymous.accounts.resetPassword', {
          url: '/reset-password/',
          templateUrl: PATH_TO_RESET_PASSWORD_STATE + '/resetPasswordState-template.html'
        });
    });
}
