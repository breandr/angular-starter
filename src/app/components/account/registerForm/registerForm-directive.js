import FormValidator from 'components/common/FormValidator';

function registerFormDirective (REGISTER_FORM_MODULE_PATH, RegisterFormCtrl) {
  return {
    restrict: 'E',
    templateUrl: REGISTER_FORM_MODULE_PATH + '/registerForm-template.html',
    link: function(scope, element) {
      scope.validator = new FormValidator(element.find('form:first'), scope.registerForm);
      element.find('[name="email"]').focus();
    },
    bindToController: true,
    controllerAs: 'registerFormCtrl',
    controller: RegisterFormCtrl
  };
}

registerFormDirective.$inject = ['REGISTER_FORM_MODULE_PATH', 'RegisterFormCtrl'];

export default registerFormDirective;
