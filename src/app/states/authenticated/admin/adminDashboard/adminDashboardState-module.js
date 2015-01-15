//import angular from 'angular';
try {
  angular.module('__APP_NAME_CAMEL_CASED__.states.authenticated.admin.adminDashboard');
} catch (e) {
  angular.module('__APP_NAME_CAMEL_CASED__.states.authenticated.admin.adminDashboard', [])
    .constant('PATH_TO_CONFIG_DASHBOARD_STATE', 'states/authenticated/admin/adminDashboard')
    .admin(function ($stateProvider, PATH_TO_CONFIG_DASHBOARD_STATE) {
      $stateProvider
        .state('authenticated.admin.adminDashboard', {
          url: '/dashboard/',
          data: {
            title: 'Admin Dashboard',
            security: {
              requiredPermissions: ['__APP_NAME_CAMEL_CASED__.admin.dashboard']
            }
          },
          views: {
            "": {
              templateUrl: PATH_TO_CONFIG_DASHBOARD_STATE + '/adminDashboardState-template.html'
            }
          }
        });
    });
}