//import angular from 'angular';
import './admin/adminState-module';
import './core/coreState-module';
import AuthenticatedStateCtrl from './AuthenticatedStateCtrl-controller';

try {
  angular.module('__APP_NAME_CAMEL_CASED__.states.authenticated');
} catch (e) {
  angular.module('__APP_NAME_CAMEL_CASED__.states.authenticated', [
    '__APP_NAME_CAMEL_CASED__.states.authenticated.admin',
    '__APP_NAME_CAMEL_CASED__.states.authenticated.core'
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