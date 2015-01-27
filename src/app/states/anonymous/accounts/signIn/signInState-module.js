//import angular from 'angular';
import 'components/signInForm/signInForm-module';
import SignInStateCtrl from './signInStateCtrl-controller';

try {
  angular.module('__APP_NAME_CAMEL_CASED__.states.anonymous.accounts.signIn');
} catch (e) {
  angular.module('__APP_NAME_CAMEL_CASED__.states.anonymous.accounts.signIn', [
    'signInForm',
    'me'
  ])
    .constant('PATH_TO_SIGN_IN_STATE', 'states/anonymous/accounts/signIn')
    .config(function ($stateProvider, PATH_TO_SIGN_IN_STATE) {
      $stateProvider
        .state('anonymous.accounts.signIn', {
          url: '/sign-in/',
          templateUrl: PATH_TO_SIGN_IN_STATE + '/signInState-template.html',
          controller: 'SignInStateCtrl'
        });
    })
    .controller('SignInStateCtrl', SignInStateCtrl);
}
