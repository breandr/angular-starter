//import angular from 'angular';

try {
  angular.module('csnetApp.states.authenticated.csnet.core.my.myAppointments.myAppointmentDetails');
} catch (e) {
  angular.module('csnetApp.states.authenticated.csnet.core.my.myAppointments.myAppointmentDetails', [])
    .constant('PATH_TO_MY_APPOINTMENT_DETAILS_STATE', 'states/authenticated/csnet/core/my/myAppointments/myAppointmentDetails')
    .config(function ($stateProvider, PATH_TO_MY_APPOINTMENT_DETAILS_STATE) {
      $stateProvider
        .state('authenticated.csnet.core.my.myAppointments.myAppointmentDetails', {
          url: '{appointmentGuid:[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}}/',
          data: {
            title: 'My Appointment Details'
          },
          views: {
            "": {
              templateUrl: PATH_TO_MY_APPOINTMENT_DETAILS_STATE + '/myAppointmentDetailsState-template.html'
            }
          }
        });
    });
}