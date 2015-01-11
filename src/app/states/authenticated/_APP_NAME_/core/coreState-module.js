//import angular from 'angular';
import './activities/activitiesState-module';
import './admin/adminState-module';
import './dashboard/dashboardState-module';
import './reports/reportsState-module';
import './my/myState-module';
import './planActions/planActionsState-module';
import 'components/csnet/briefContact/briefContactUpsertModal/briefContactUpsertModal-module';
import 'components/csnet/activity/activityUpsert/activityUpsertModal/activityUpsertModal-module';
import CoreStateSideNavCtrl from './CoreStateSideNavCtrl-controller';

try {
  angular.module('csnetApp.states.authenticated.csnet.core');
} catch (e) {
  angular.module('csnetApp.states.authenticated.csnet.core', [
    'csnet.briefContact.briefContactUpsertModal',
    'csnet.activity.activityUpsert.activityUpsertModal',
    'csnetApp.states.authenticated.csnet.core.activities',
    'csnetApp.states.authenticated.csnet.core.admin',
    'csnetApp.states.authenticated.csnet.core.dashboard',
    'csnetApp.states.authenticated.csnet.core.reports',
    'csnetApp.states.authenticated.csnet.core.my',
    'csnetApp.states.authenticated.csnet.core.planActions'
  ])
    .constant('PATH_TO_CORE_STATE', 'states/authenticated/csnet/core')
    .controller('CoreStateSideNavCtrl', CoreStateSideNavCtrl)
    .config(($stateProvider, PATH_TO_CORE_STATE) => {
      $stateProvider
        .state('authenticated.csnet.core', {
          abstract: true,
          data: {
            title: 'Core',
            security: {
              allowedUserTypes: ['Root', 'User']
            }
          },
          views: {
            "": {
              template: '<ui-view layout="row" flex />',
              controllerAs: 'coreStateCtrl',
              controller: function(){}
            },
            "sideNav@authenticated": {
              templateUrl: PATH_TO_CORE_STATE + '/coreStateSideNav-template.html',
              controllerAs: 'coreStateSideNavCtrl',
              controller: 'CoreStateSideNavCtrl'
            }
          }
        });
    });
}