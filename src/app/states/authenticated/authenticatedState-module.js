//import angular from 'angular';
import './__APP_NAME_CAMEL_CASED__/__APP_NAME_CAMEL_CASED__State-module';
import './__APP_NAME_CAMEL_CASED__Master/__APP_NAME_CAMEL_CASED__MasterState-module';
import './__APP_NAME_CAMEL_CASED__Consortium/__APP_NAME_CAMEL_CASED__ConsortiumState-module';
import AuthenticatedStateCtrl from './AuthenticatedStateCtrl-controller';

try {
  angular.module('myApp.states.authenticated');
} catch (e) {
  angular.module('myApp.states.authenticated', [
    'myApp.states.authenticated.admin',
    'myApp.states.authenticated.core'
  ])
    .constant('PATH_TO_AUTHENTICATED_STATE', 'states/authenticated')
    .controller('AuthenticatedStateCtrl', AuthenticatedStateCtrl)
    .config(function ($stateProvider, PATH_TO_AUTHENTICATED_STATE) {
      $stateProvider
        .state('authenticated', {
          abstract: true,
          data: {
            title: 'Authenticated',
            security: {
              allowAnonymous: false,
              requiredPermissions: ['__APP_NAME_CAMEL_CASED__'],
              allowedUserTypes: ['Root', 'User', 'Volunteer', 'Contractor']
            }
          },
          views: {
            "": {
              templateUrl: PATH_TO_AUTHENTICATED_STATE + '/authenticatedState-template.html',
              controllerAs: 'authenticatedStateCtrl',
              controller: 'AuthenticatedStateCtrl'
            }
          }
        });
    });
}