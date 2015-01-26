//import angular from 'angular';
// import 'components/__APP_NAME_CAMEL_CASED__/languages/languages';
import 'components/__APP_NAME_CAMEL_CASED__/signIn/signIn-module';
import SignInStateCtrl from './signInState-controller';

try {
  angular.module('__APP_NAME_CAMEL_CASED__.states.anonymous.signIn');
} catch (e) {
  angular.module('__APP_NAME_CAMEL_CASED__.states.anonymous.signIn', [
    // '__APP_NAME_CAMEL_CASED__.languages',
    '__APP_NAME_CAMEL_CASED__.signIn',
    '__APP_NAME_CAMEL_CASED__.me'
  ])
    .constant('pathToSignInState', 'states/anonymous/signIn')
    .config(function ($stateProvider, pathToSignInState) {
      $stateProvider
        .state('anonymous.signIn', {
          url: '/sign-in/',
          templateUrl: pathToSignInState + '/signIn-template.html',
          controller: 'SignInStateCtrl'
        });
    })
    .controller('SignInStateCtrl', SignInStateCtrl);
}