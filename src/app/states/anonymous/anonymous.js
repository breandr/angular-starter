//import angular from 'angular';
import './signIn/signIn';
import './pageNotFound/pageNotFound';
import AnonymousStateCtrl from './anonymousState-controller';

try {
  angular.module('__APP_NAME_CAMEL_CASED__.states.anonymous');
} catch (e) {
  angular.module('__APP_NAME_CAMEL_CASED__.states.anonymous', [
    '__APP_NAME_CAMEL_CASED__.states.anonymous.pageNotFound',
    '__APP_NAME_CAMEL_CASED__.states.anonymous.signIn'
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