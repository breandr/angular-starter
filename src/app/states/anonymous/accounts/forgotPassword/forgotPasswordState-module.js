//import angular from 'angular';
import 'components/account/forgotPasswordForm/forgotPasswordForm-module';

try {
  angular.module('__APP_NAME_CAMEL_CASED__.states.anonymous.accounts.forgotPassword');
} catch (e) {
  angular.module('__APP_NAME_CAMEL_CASED__.states.anonymous.accounts.forgotPassword', [
    'account.forgotPasswordForm',
    'me'
  ])
    .constant('PATH_TO_FORGOT_PASSWORD_STATE', 'states/anonymous/accounts/forgotPassword')
    .config(function ($stateProvider, PATH_TO_FORGOT_PASSWORD_STATE) {
      $stateProvider
        .state('anonymous.accounts.forgotPassword', {
          url: '/forgot-password/',
          templateUrl: PATH_TO_FORGOT_PASSWORD_STATE + '/forgotPasswordState-template.html'
        });
    });
}
