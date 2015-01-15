//import angular from 'angular';
import './my/myState-module';
// import 'components/__APP_NAME_CAMEL_CASED__/component/componentUpsert/componentUpsertModal/componentUpsertModal-module';
import CoreStateSideNavCtrl from './CoreStateSideNavCtrl-controller';

try {
  angular.module('__APP_NAME_CAMEL_CASED__.states.authenticated.core');
} catch (e) {
  angular.module('__APP_NAME_CAMEL_CASED__.states.authenticated.core', [
    // '__APP_NAME_CAMEL_CASED__.component.componentUpsert.componentUpsertModal',
    '__APP_NAME_CAMEL_CASED__.states.authenticated.core.my'
  ])
    .constant('PATH_TO_CORE_STATE', 'states/authenticated/core')
    .controller('CoreStateSideNavCtrl', CoreStateSideNavCtrl)
    .config(($stateProvider, PATH_TO_CORE_STATE) => {
      $stateProvider
        .state('authenticated.core', {
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