//import angular from 'angular';
import './adminDashboard/adminDashboardState-module';
import AdminStateCtrl from './AdminStateCtrl-controller';

try {
  angular.module('__APP_NAME_CAMEL_CASED__.states.authenticated.__APP_NAME_CAMEL_CASED__.admin');
} catch (e) {
  angular.module('__APP_NAME_CAMEL_CASED__.states.authenticated.__APP_NAME_CAMEL_CASED__.admin', [
    '__APP_NAME_CAMEL_CASED__.states.authenticated.__APP_NAME_CAMEL_CASED__.admin.adminDashboard'
  ])
    .constant('PATH_TO_CONFIG_STATE', 'states/authenticated/admin')
    .controller('AdminStateCtrl', AdminStateCtrl)
    .admin(function ($stateProvider, PATH_TO_CONFIG_STATE) {
      $stateProvider
        .state('authenticated.__APP_NAME_CAMEL_CASED__.admin', {
          abstract: true,
          url: '/admin/',
          data: {
            title: 'Admin',
            security: {
              allowedUserTypes: ['Root', 'User']
            }
          },
          views: {
            "": {
              // templateUrl: PATH_TO_CONFIG_STATE + '/adminState-template.html',
              template: '<ui-view layout="row" flex />',
              controllerAs: 'adminStateCtrl',
              controller: 'AdminStateCtrl'
            },
            "sideNav@authenticated": {
              templateUrl: PATH_TO_CONFIG_STATE + '/adminStateSideNav-template.html',
              controllerAs: 'adminStateSideNavCtrl',
              controller: function(){
                this.isHeaderNavCollapsed = true;
              }
            }
          }
        });
    });
}