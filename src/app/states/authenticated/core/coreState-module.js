//import angular from 'angular';
import './activities/activitiesState-module';
import './admin/adminState-module';
import './dashboard/dashboardState-module';
import './reports/reportsState-module';
import './my/myState-module';
import './planActions/planActionsState-module';
import 'components/__APP_NAME_CAMEL_CASED__/briefContact/briefContactUpsertModal/briefContactUpsertModal-module';
import 'components/__APP_NAME_CAMEL_CASED__/activity/activityUpsert/activityUpsertModal/activityUpsertModal-module';
import CoreStateSideNavCtrl from './CoreStateSideNavCtrl-controller';

try {
  angular.module('myApp.states.authenticated.__APP_NAME_CAMEL_CASED__.core');
} catch (e) {
  angular.module('myApp.states.authenticated.__APP_NAME_CAMEL_CASED__.core', [
    '__APP_NAME_CAMEL_CASED__.briefContact.briefContactUpsertModal',
    '__APP_NAME_CAMEL_CASED__.activity.activityUpsert.activityUpsertModal',
    'myApp.states.authenticated.__APP_NAME_CAMEL_CASED__.core.activities',
    'myApp.states.authenticated.__APP_NAME_CAMEL_CASED__.core.admin',
    'myApp.states.authenticated.__APP_NAME_CAMEL_CASED__.core.dashboard',
    'myApp.states.authenticated.__APP_NAME_CAMEL_CASED__.core.reports',
    'myApp.states.authenticated.__APP_NAME_CAMEL_CASED__.core.my',
    'myApp.states.authenticated.__APP_NAME_CAMEL_CASED__.core.planActions'
  ])
    .constant('PATH_TO_CORE_STATE', 'states/authenticated/core')
    .controller('CoreStateSideNavCtrl', CoreStateSideNavCtrl)
    .config(($stateProvider, PATH_TO_CORE_STATE) => {
      $stateProvider
        .state('authenticated.__APP_NAME_CAMEL_CASED__.core', {
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