function signInDirective (signInModulePath, FormValidator) {
  return {
    restrict: 'E',
    templateUrl: signInModulePath + '/signIn-template.html',
    link: function(scope, element) {
      scope.validator = new FormValidator(element.find('form:first'), scope.signInForm);
    },
    controller: ['$scope', 'signedInUser', function($scope, signedInUser) {
      $scope.formData = {
        email: '',
        password: ''
      };

      $scope.signIn = function() {
        if ($scope.validator.isFormValid()) {
          signedInUser.signIn($scope.formData.email, $scope.formData.password).then(() => {
            $scope.signInForm.submitted = false;
            return signedInUser.goToDefaultState();
          });
        }
      };
    }]
  };
}

signInDirective.$inject = ['signInModulePath', 'FormValidator'];

export default signInDirective;