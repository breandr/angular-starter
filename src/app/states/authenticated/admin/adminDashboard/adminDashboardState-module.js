//import angular from 'angular';
import 'components/__APP_NAME_CAMEL_CASED__/configuration/__APP_NAME_CAMEL_CASED__Configuration-module';

try {
  angular.module('myApp.states.authenticated.__APP_NAME_CAMEL_CASED__.config.configDashboard');
} catch (e) {
  angular.module('myApp.states.authenticated.__APP_NAME_CAMEL_CASED__.config.configDashboard', [
    '__APP_NAME_CAMEL_CASED__.configuration.configuration'
  ])
    .constant('PATH_TO_CONFIG_DASHBOARD_STATE', 'states/authenticated/config/configDashboard')
    .config(function ($stateProvider, PATH_TO_CONFIG_DASHBOARD_STATE) {
      $stateProvider
        .state('authenticated.__APP_NAME_CAMEL_CASED__.config.configDashboard', {
          url: '/dashboard/',
          data: {
            title: 'Config Dashboard',
            security: {
              requiredPermissions: ['__APP_NAME_CAMEL_CASED__.config.dashboard']
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