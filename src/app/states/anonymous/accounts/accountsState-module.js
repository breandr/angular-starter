//import angular from 'angular';
import './signIn/signInState-module';
import './register/registerState-module';
import './forgotPassword/forgotPasswordState-module';
import './resetPassword/resetPasswordState-module';
import AccountsStateCtrl from './accountsStateCtrl-controller';

try {
  angular.module('__APP_NAME_CAMEL_CASED__.states.anonymous.accounts');
} catch (e) {
  angular.module('__APP_NAME_CAMEL_CASED__.states.anonymous.accounts', [
    '__APP_NAME_CAMEL_CASED__.states.anonymous.accounts.signIn',
    '__APP_NAME_CAMEL_CASED__.states.anonymous.accounts.register',
    '__APP_NAME_CAMEL_CASED__.states.anonymous.accounts.forgotPassword',
    '__APP_NAME_CAMEL_CASED__.states.anonymous.accounts.resetPassword'
  ])
    .constant('PATH_TO_ACCOUNTS_STATE', 'states/anonymous/accounts')
    .config(function ($stateProvider, PATH_TO_ACCOUNTS_STATE) {
      $stateProvider
        .state('anonymous.accounts', {
          abstract: true,
          templateUrl: PATH_TO_ACCOUNTS_STATE + '/accountsState-template.html',
          controller: 'AccountsStateCtrl',
          data: {
            security: {
              allowAnonymous: true
            }
          }
        });
    })
    .controller('AccountsStateCtrl', AccountsStateCtrl);
}
