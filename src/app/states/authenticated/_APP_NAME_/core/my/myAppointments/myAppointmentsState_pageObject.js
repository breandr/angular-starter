module.exports = {
  navigateHere: function () {
    browser.get('/my/appointments/');
  },
  goToState: function () {
    browser.get('/');
    $state.go('authenticated.csnet.core.my.myAppointments');
  },
  stateContainer: element(by.id('myAppointmentsState'))
};