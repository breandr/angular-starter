module.exports = {
  navigateHere: function () {
    browser.get('/my/profile/');
  },
  goToState: function () {
    browser.get('/');
    $state.go('authenticated.csnet.core.my.myProfile');
  },
  stateContainer: element(by.id('myProfileState'))
};