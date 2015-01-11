module.exports = {
  navigateHere: function () {
    browser.get('/my/appointments/');
  },
  goToState: function () {
    browser.get('/');
    $state.go('authenticated.csnet.core.my.myAppointments.myAppointmentsList');
  },
  stateContainer: element(by.id('myAppointmentsListState'))
};