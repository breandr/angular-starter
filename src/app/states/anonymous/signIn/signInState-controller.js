import 'components/csnet/signedInUser/signedInUser-module';

function signInStateCtrl ($state, signedInUser) {
  // Redirect to dashboard if already authenticated
  if (signedInUser.isAuthenticated()) {
    return signedInUser.goToDefaultState();
  }
}

signInStateCtrl.$inject = ['$state', 'signedInUser'];

export default signInStateCtrl;