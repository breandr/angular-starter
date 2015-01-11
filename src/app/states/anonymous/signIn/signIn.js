//import angular from 'angular';
// import 'components/csnet/languages/languages';
import 'components/csnet/signIn/signIn-module';
import SignInStateCtrl from './signInState-controller';

try {
  angular.module('csnetApp.states.anonymous.signIn');
} catch (e) {
  angular.module('csnetApp.states.anonymous.signIn', [
    // 'csnet.languages',
    'csnet.signIn',
    'csnet.signedInUser'
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