module.exports = {
  navigateHere: function () {
    browser.get('/my/preferences/');
  },
  goToState: function () {
    browser.get('/');
    $state.go('authenticated.core.my.myPreferences');
  },
  stateContainer: element(by.id('myPreferencesState'))
};