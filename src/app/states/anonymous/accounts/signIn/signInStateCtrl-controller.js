function signInStateCtrl ($state, me) {
  // Redirect to dashboard if already authenticated
  if (me.isAuthenticated()) {
    return me.goToDefaultState();
  }
}

signInStateCtrl.$inject = ['$state', 'me'];

export default signInStateCtrl;
