//import angular from 'angular';
import './configDashboard/configDashboardState-module';
import ConfigStateCtrl from './ConfigStateCtrl-controller';

try {
  angular.module('myApp.states.authenticated.__APP_NAME_CAMEL_CASED__.config');
} catch (e) {
  angular.module('myApp.states.authenticated.__APP_NAME_CAMEL_CASED__.config', [
    'myApp.states.authenticated.__APP_NAME_CAMEL_CASED__.config.configDashboard'
  ])
    .constant('PATH_TO_CONFIG_STATE', 'states/authenticated/config')
    .controller('ConfigStateCtrl', ConfigStateCtrl)
    .config(function ($stateProvider, PATH_TO_CONFIG_STATE) {
      $stateProvider
        .state('authenticated.__APP_NAME_CAMEL_CASED__.config', {
          abstract: true,
          url: '/config/',
          data: {
            title: 'Config',
            security: {
              allowedUserTypes: ['Root', 'User']
            }
          },
          views: {
            "": {
              // templateUrl: PATH_TO_CONFIG_STATE + '/configState-template.html',
              template: '<ui-view layout="row" flex />',
              controllerAs: 'configStateCtrl',
              controller: 'ConfigStateCtrl'
            },
            "sideNav@authenticated": {
              templateUrl: PATH_TO_CONFIG_STATE + '/configStateSideNav-template.html',
              controllerAs: 'configStateSideNavCtrl',
              controller: function(){
                this.isHeaderNavCollapsed = true;
              }
            }
          }
        });
    });
}