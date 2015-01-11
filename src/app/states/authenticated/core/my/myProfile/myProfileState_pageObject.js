module.exports = {
  navigateHere: function () {
    browser.get('/my/profile/');
  },
  goToState: function () {
    browser.get('/');
    $state.go('authenticated.__APP_NAME_CAMEL_CASED__.core.my.myProfile');
  },
  stateContainer: element(by.id('myProfileState'))
};