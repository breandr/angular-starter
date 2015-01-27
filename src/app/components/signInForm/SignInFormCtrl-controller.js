class SignInFormCtrlFactory{
  constructor(me) {
    class SignInFormCtrl {
      constructor($scope){
        this.$scope = $scope;
      }

      localSignIn() {
        if (this.$scope.validator.isFormValid()) {
          me.localSignIn('local', this.formData.email, this.formData.password).then(() => {
            this.$scope.signInForm.submitted = false;

            return me.goToDefaultState();
          });
        }
      }

      socialSignIn(provider){
        return me.socialSignIn(provider).then(() => {
          this.$scope.signInForm.submitted = false;

          return me.goToDefaultState();
        });
      }
    }

    SignInFormCtrl.$inject = ['$scope'];

    return SignInFormCtrl;
  }
}

SignInFormCtrlFactory.$inject = ['me'];

export default SignInFormCtrlFactory;
