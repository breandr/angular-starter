//import angular from 'angular';
import './accounts/accountsState-module';
import './pageNotFound/pageNotFound';
import AnonymousStateCtrl from './anonymousStateCtrl-controller';

try {
  angular.module('__APP_NAME_CAMEL_CASED__.states.anonymous');
} catch (e) {
  angular.module('__APP_NAME_CAMEL_CASED__.states.anonymous', [
    '__APP_NAME_CAMEL_CASED__.states.anonymous.pageNotFound',
    '__APP_NAME_CAMEL_CASED__.states.anonymous.accounts'
  ])
    .config(function ($stateProvider) {
      $stateProvider
        .state('anonymous', {
          abstract: true,
          template: '<ui-view flex layout>',
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
