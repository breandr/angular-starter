//import angular from 'angular';
import 'components/account/signInForm/signInForm-module';

try {
  angular.module('__APP_NAME_CAMEL_CASED__.states.anonymous.accounts.signIn');
} catch (e) {
  angular.module('__APP_NAME_CAMEL_CASED__.states.anonymous.accounts.signIn', [
    'account.signInForm',
    'me'
  ])
    .constant('PATH_TO_SIGN_IN_STATE', 'states/anonymous/accounts/signIn')
    .config(function ($stateProvider, PATH_TO_SIGN_IN_STATE) {
      $stateProvider
        .state('anonymous.accounts.signIn', {
          url: '/sign-in/',
          templateUrl: PATH_TO_SIGN_IN_STATE + '/signInState-template.html'
        });
    });
}
