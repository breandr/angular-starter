module.exports = {
  navigateHere: function () {
    browser.get('/my/notifications/');
  },
  goToState: function () {
    browser.get('/');
    $state.go('authenticated.__APP_NAME_CAMEL_CASED__.core.my.myNotificationsList');
  },
  stateContainer: element(by.id('myNotificationsListState'))
};