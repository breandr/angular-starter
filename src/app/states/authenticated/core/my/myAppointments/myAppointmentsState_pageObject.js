module.exports = {
  navigateHere: function () {
    browser.get('/my/appointments/');
  },
  goToState: function () {
    browser.get('/');
    $state.go('authenticated.__APP_NAME_CAMEL_CASED__.core.my.myAppointments');
  },
  stateContainer: element(by.id('myAppointmentsState'))
};