module.exports = {
  navigateHere: function () {
    browser.get('/config//dashboard/');
  },
  goToState: function () {
    browser.get('/');
    $state.go('authenticated.__APP_NAME_CAMEL_CASED__.config.configDashboard');
  },
  stateContainer: element(by.id('configDashboardState'))
};