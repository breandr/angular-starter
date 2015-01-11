//import angular from 'angular';
import './signIn/signIn';
import './pageNotFound/pageNotFound';
import AnonymousStateCtrl from './anonymousState-controller';

try {
  angular.module('csnetApp.states.anonymous');
} catch (e) {
  angular.module('csnetApp.states.anonymous', [
    'csnetApp.states.anonymous.pageNotFound',
    'csnetApp.states.anonymous.signIn'
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