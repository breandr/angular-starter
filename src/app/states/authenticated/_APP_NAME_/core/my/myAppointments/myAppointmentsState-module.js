//import angular from 'angular';
import './myAppointmentDetails/myAppointmentDetailsState-module';
import './myAppointmentsList/myAppointmentsListState-module';

try {
  angular.module('csnetApp.states.authenticated.csnet.core.my.myAppointments');
} catch (e) {
  angular.module('csnetApp.states.authenticated.csnet.core.my.myAppointments', [
    'csnetApp.states.authenticated.csnet.core.my.myAppointments.myAppointmentDetails',
    'csnetApp.states.authenticated.csnet.core.my.myAppointments.myAppointmentsList'
  ])
    .constant('PATH_TO_MY_APPOINTMENTS_STATE', 'states/authenticated/csnet/core/my/myAppointments')
    .config(function ($stateProvider, PATH_TO_MY_APPOINTMENTS_STATE) {
      $stateProvider
        .state('authenticated.csnet.core.my.myAppointments', {
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