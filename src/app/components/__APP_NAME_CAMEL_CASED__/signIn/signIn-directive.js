//import SignInCtrlFactory from './SignInCtrl-controller';

function signInDirective (SIGN_IN_FORM_MODULE_PATH, FormValidator, SignInCtrl) {
  return {
    restrict: 'E',
    templateUrl: SIGN_IN_FORM_MODULE_PATH + '/signIn-template.html',
    link: function(scope, element) {
      scope.validator = new FormValidator(element.find('form:first'), scope.signInForm);
    },
    bindToController: true,
    controllerAs: 'signInFormCtrl',
    controller: SignInCtrl
  };
}

signInDirective.$inject = ['SIGN_IN_FORM_MODULE_PATH', 'FormValidator', 'SignInCtrl'];

export default signInDirective;