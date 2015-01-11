module.exports = {
  navigateHere: function () {
    browser.get('/config//dashboard/');
  },
  goToState: function () {
    browser.get('/');
    $state.go('authenticated.csnet.config.configDashboard');
  },
  stateContainer: element(by.id('configDashboardState'))
};