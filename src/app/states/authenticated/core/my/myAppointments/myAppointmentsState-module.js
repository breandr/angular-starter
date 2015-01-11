//import angular from 'angular';
import './myAppointmentDetails/myAppointmentDetailsState-module';
import './myAppointmentsList/myAppointmentsListState-module';

try {
  angular.module('myApp.states.authenticated.__APP_NAME_CAMEL_CASED__.core.my.myAppointments');
} catch (e) {
  angular.module('myApp.states.authenticated.__APP_NAME_CAMEL_CASED__.core.my.myAppointments', [
    'myApp.states.authenticated.__APP_NAME_CAMEL_CASED__.core.my.myAppointments.myAppointmentDetails',
    'myApp.states.authenticated.__APP_NAME_CAMEL_CASED__.core.my.myAppointments.myAppointmentsList'
  ])
    .constant('PATH_TO_MY_APPOINTMENTS_STATE', 'states/authenticated/core/my/myAppointments')
    .config(function ($stateProvider, PATH_TO_MY_APPOINTMENTS_STATE) {
      $stateProvider
        .state('authenticated.__APP_NAME_CAMEL_CASED__.core.my.myAppointments', {
          url: 'appointments/',
          data: {
            title: 'My Appointments'
          },
          views: {
            "": {
              templateUrl: PATH_TO_MY_APPOINTMENTS_STATE + '/myAppointmentsState-template.html'
            }
          }
        });
    });
}