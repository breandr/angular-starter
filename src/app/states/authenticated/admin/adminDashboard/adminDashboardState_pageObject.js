module.exports = {
  navigateHere: function () {
    browser.get('/admin//dashboard/');
  },
  goToState: function () {
    browser.get('/');
    $state.go('authenticated.admin.adminDashboard');
  },
  stateContainer: element(by.id('adminDashboardState'))
};