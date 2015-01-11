//import angular from 'angular';
import './config/configState-module';
import './core/coreState-module';
import './slim/slimState-module';

try {
  angular.module('csnetApp.states.authenticated.csnet');
} catch (e) {
  angular.module('csnetApp.states.authenticated.csnet', [
    'csnetApp.states.authenticated.csnet.config',
    'csnetApp.states.authenticated.csnet.core',
    'csnetApp.states.authenticated.csnet.slim'
  ])
    .constant('PATH_TO_CSNET_STATE', 'states/authenticated/csnet')
    .config(function ($stateProvider) {
      $stateProvider
        .state('authenticated.csnet', {
          abstract: true,
          data: {
            title: 'Csnet',
            security: {
              allowedUserTypes: ['RootUser', 'User', 'Volunteer', 'Contractor']
            }
          },
          views: {
            "": {
              template: '<ui-view layout="row" flex />'
            }
          }
        });
    });
}