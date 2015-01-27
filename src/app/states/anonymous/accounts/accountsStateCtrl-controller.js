function accountsStateCtrl ($state, me) {
  // Redirect to dashboard if already authenticated
  if (me.isAuthenticated()) {
    return me.goToDefaultState();
  }
}

accountsStateCtrl.$inject = ['$state', 'me'];

export default accountsStateCtrl;
