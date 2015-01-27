function registerStateCtrl ($state, me) {
  if (me.isAuthenticated()) {
    return me.goToDefaultState();
  }
}

registerStateCtrl.$inject = ['$state', 'me'];

export default registerStateCtrl;
