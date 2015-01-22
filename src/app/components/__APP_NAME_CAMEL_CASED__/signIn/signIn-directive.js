function signInDirective (SIGN_IN_FORM_MODULE_PATH, FormValidator) {
  return {
    restrict: 'E',
    templateUrl: SIGN_IN_FORM_MODULE_PATH + '/signIn-template.html',
    link: function(scope, element) {
      scope.validator = new FormValidator(element.find('form:first'), scope.signInForm);
    },
    bindToController: true,
    controllerAs: 'signInFormCtrl',
    controller: ['$scope', 'signedInUser', function($scope, signedInUser) {
      this.formData = {
        email: '',
        password: ''
      };
      
      this.signIn = () => {
        console.log($scope.validator.isFormValid());
        if ($scope.validator.isFormValid()) {
          signedInUser.signIn('local', this.formData.email, this.formData.password).then(() => {
            this.signInForm.submitted = false;
            return signedInUser.goToDefaultState();
          });
        }
      };
    }]
  };
}

signInDirective.$inject = ['SIGN_IN_FORM_MODULE_PATH', 'FormValidator'];

export default signInDirective;