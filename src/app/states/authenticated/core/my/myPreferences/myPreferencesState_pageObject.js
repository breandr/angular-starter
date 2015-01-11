module.exports = {
  navigateHere: function () {
    browser.get('/my/preferences/');
  },
  goToState: function () {
    browser.get('/');
    $state.go('authenticated.__APP_NAME_CAMEL_CASED__.core.my.myPreferences');
  },
  stateContainer: element(by.id('myPreferencesState'))
};