//import angular from 'angular';

try {
  angular.module('myApp.states.authenticated.__APP_NAME_CAMEL_CASED__.core.my.myAppointments.myAppointmentsList');
} catch (e) {
  angular.module('myApp.states.authenticated.__APP_NAME_CAMEL_CASED__.core.my.myAppointments.myAppointmentsList', [])
    .constant('PATH_TO_MY_APPOINTMENTS_LIST_STATE', 'states/authenticated/core/my/myAppointments/myAppointmentsList')
    .config(function ($stateProvider, PATH_TO_MY_APPOINTMENTS_LIST_STATE) {
      $stateProvider
        .state('authenticated.__APP_NAME_CAMEL_CASED__.core.my.myAppointments.myAppointmentsList', {
          url: '',
          data: {
            title: 'My Appointments List'
          },
          views: {
            "": {
              templateUrl: PATH_TO_MY_APPOINTMENTS_LIST_STATE + '/myAppointmentsListState-template.html'
            }
          }
        });
    });
}