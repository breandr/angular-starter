//import angular from 'angular';
import './myAppointments/myAppointmentsState-module';
import './myNotificationsList/myNotificationsListState-module';
import './myPreferences/myPreferencesState-module';
import './myProfile/myProfileState-module';

try {
  angular.module('csnetApp.states.authenticated.csnet.core.my');
} catch (e) {
  angular.module('csnetApp.states.authenticated.csnet.core.my', [
    'csnetApp.states.authenticated.csnet.core.my.myAppointments',
    'csnetApp.states.authenticated.csnet.core.my.myNotificationsList',
    'csnetApp.states.authenticated.csnet.core.my.myPreferences',
    'csnetApp.states.authenticated.csnet.core.my.myProfile'
  ])
    .constant('PATH_TO_MY_STATE', 'states/authenticated/csnet/core/my')
    .config(function ($stateProvider) {
      $stateProvider
        .state('authenticated.csnet.core.my', {
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