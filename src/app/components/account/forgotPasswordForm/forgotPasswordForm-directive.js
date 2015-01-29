import FormValidator from 'components/common/FormValidator';

function forgotPasswordFormDirective (FORGOT_PASSWORD_FORM_MODULE_PATH, ForgotPasswordFormCtrl) {
  return {
    restrict: 'E',
    templateUrl: FORGOT_PASSWORD_FORM_MODULE_PATH + '/forgotPasswordForm-template.html',
    link: function(scope, element) {
      scope.validator = new FormValidator(element.find('form:first'), scope.forgotPasswordForm);
      element.find('[name="email"]').focus();
    },
    bindToController: true,
    controllerAs: 'forgotPasswordFormCtrl',
    controller: ForgotPasswordFormCtrl
  };
}

forgotPasswordFormDirective.$inject = ['FORGOT_PASSWORD_FORM_MODULE_PATH', 'ForgotPasswordFormCtrl'];

export default forgotPasswordFormDirective;
