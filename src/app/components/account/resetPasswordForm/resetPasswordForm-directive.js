import FormValidator from 'components/common/FormValidator';

function resetPasswordFormDirective (RESET_PASSWORD_FORM_MODULE_PATH, ResetPasswordFormCtrl) {
  return {
    restrict: 'E',
    templateUrl: RESET_PASSWORD_FORM_MODULE_PATH + '/resetPasswordForm-template.html',
    link: function(scope, element) {
      scope.validator = new FormValidator(element.find('form:first'), scope.resetPasswordForm);
      element.find('[name="email"]').focus();
    },
    bindToController: true,
    controllerAs: 'resetPasswordFormCtrl',
    controller: ResetPasswordFormCtrl
  };
}

resetPasswordFormDirective.$inject = ['RESET_PASSWORD_FORM_MODULE_PATH', 'ResetPasswordFormCtrl'];

export default resetPasswordFormDirective;
