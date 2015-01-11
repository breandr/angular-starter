module.exports = {
  navigateHere: function () {
    browser.get('/my/appointments/{appointmentGuid:[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}}/');
  },
  goToState: function () {
    browser.get('/');
    $state.go('authenticated.__APP_NAME_CAMEL_CASED__.core.my.myAppointments.myAppointmentDetails');
  },
  stateContainer: element(by.id('myAppointmentDetailsState'))
};