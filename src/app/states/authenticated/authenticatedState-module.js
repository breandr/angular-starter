//import angular from 'angular';
import './csnet/csnetState-module';
import './csnetMaster/csnetMasterState-module';
import './csnetConsortium/csnetConsortiumState-module';
import AuthenticatedStateCtrl from './AuthenticatedStateCtrl-controller';

try {
  angular.module('csnetApp.states.authenticated');
} catch (e) {
  angular.module('csnetApp.states.authenticated', [
    'csnetApp.states.authenticated.csnet',
    'csnetApp.states.authenticated.csnetMaster',
    'csnetApp.states.authenticated.csnetConsortium'
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
              requiredPermissions: ['csnet'],
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