//import angular from 'angular';
import './myNotificationsList/myNotificationsListState-module';
import './myPreferences/myPreferencesState-module';
import './myProfile/myProfileState-module';

try {
  angular.module('__APP_NAME_CAMEL_CASED__.states.authenticated.core.my');
} catch (e) {
  angular.module('__APP_NAME_CAMEL_CASED__.states.authenticated.core.my', [
    '__APP_NAME_CAMEL_CASED__.states.authenticated.core.my.myNotificationsList',
    '__APP_NAME_CAMEL_CASED__.states.authenticated.core.my.myPreferences',
    '__APP_NAME_CAMEL_CASED__.states.authenticated.core.my.myProfile'
  ])
    .constant('PATH_TO_MY_STATE', 'states/authenticated/core/my')
    .config(function ($stateProvider) {
      $stateProvider
        .state('authenticated.core.my', {
          abstract: true,
          url: '/my/',
          data: {
            title: 'My'
          },
          views: {
            "": {
              template: '<ui-view layout="row" flex />'
            }
          }
        });
    });
}