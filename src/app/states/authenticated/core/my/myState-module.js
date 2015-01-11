//import angular from 'angular';
import './myAppointments/myAppointmentsState-module';
import './myNotificationsList/myNotificationsListState-module';
import './myPreferences/myPreferencesState-module';
import './myProfile/myProfileState-module';

try {
  angular.module('myApp.states.authenticated.__APP_NAME_CAMEL_CASED__.core.my');
} catch (e) {
  angular.module('myApp.states.authenticated.__APP_NAME_CAMEL_CASED__.core.my', [
    'myApp.states.authenticated.__APP_NAME_CAMEL_CASED__.core.my.myAppointments',
    'myApp.states.authenticated.__APP_NAME_CAMEL_CASED__.core.my.myNotificationsList',
    'myApp.states.authenticated.__APP_NAME_CAMEL_CASED__.core.my.myPreferences',
    'myApp.states.authenticated.__APP_NAME_CAMEL_CASED__.core.my.myProfile'
  ])
    .constant('PATH_TO_MY_STATE', 'states/authenticated/core/my')
    .config(function ($stateProvider) {
      $stateProvider
        .state('authenticated.__APP_NAME_CAMEL_CASED__.core.my', {
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