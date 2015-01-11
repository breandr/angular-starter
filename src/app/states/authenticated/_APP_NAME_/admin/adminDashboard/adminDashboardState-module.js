//import angular from 'angular';
import 'components/csnet/configuration/csnetConfiguration-module';

try {
  angular.module('csnetApp.states.authenticated.csnet.config.configDashboard');
} catch (e) {
  angular.module('csnetApp.states.authenticated.csnet.config.configDashboard', [
    'csnet.configuration.configuration'
  ])
    .constant('PATH_TO_CONFIG_DASHBOARD_STATE', 'states/authenticated/csnet/config/configDashboard')
    .config(function ($stateProvider, PATH_TO_CONFIG_DASHBOARD_STATE) {
      $stateProvider
        .state('authenticated.csnet.config.configDashboard', {
          url: '/dashboard/',
          data: {
            title: 'Config Dashboard',
            security: {
              requiredPermissions: ['csnet.config.dashboard']
            }
          },
          views: {
            "": {
              templateUrl: PATH_TO_CONFIG_DASHBOARD_STATE + '/configDashboardState-template.html'
            }
          }
        });
    });
}