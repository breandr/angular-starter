//import angular from 'angular';
import './signIn/signIn';
import './pageNotFound/pageNotFound';
import AnonymousStateCtrl from './anonymousState-controller';

try {
  angular.module('myApp.states.anonymous');
} catch (e) {
  angular.module('myApp.states.anonymous', [
    'myApp.states.anonymous.pageNotFound',
    'myApp.states.anonymous.signIn'
  ])
    .config(function ($stateProvider) {
      $stateProvider
        .state('anonymous', {
          abstract: true,
          template: '<ui-view flex>',
          controller: 'AnonymousStateCtrl',
          data: {
            security: {
              allowAnonymous: true
            }
          }
        });
    })
    .controller('AnonymousStateCtrl', AnonymousStateCtrl);
}