import FormValidator from 'components/common/FormValidator';

function signInFormDirective (SIGN_IN_FORM_MODULE_PATH, SignInFormCtrl) {
  return {
    restrict: 'E',
    templateUrl: SIGN_IN_FORM_MODULE_PATH + '/signInForm-template.html',
    link: function(scope, element) {
      scope.validator = new FormValidator(element.find('form:first'), scope.signInForm);
    },
    bindToController: true,
    controllerAs: 'signInFormCtrl',
    controller: SignInFormCtrl
  };
}

signInFormDirective.$inject = ['SIGN_IN_FORM_MODULE_PATH', 'SignInFormCtrl'];

export default signInFormDirective;
