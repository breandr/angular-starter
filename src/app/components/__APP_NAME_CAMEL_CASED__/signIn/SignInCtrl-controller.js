class SignInCtrlFactory{
  constructor(me) {
    class SignInCtrl {
      constructor($scope){
        this.$scope = $scope;
      }
      
      localSignIn() {
        if (this.$scope.validator.isFormValid()) {
          me.localSignIn('local', this.formData.email, this.formData.password).then(() => {
            this.signInForm.submitted = false;
            
            return me.goToDefaultState();
          });
        }
      }
      
      socialSignIn(provider){
        return me.socialSignIn(provider);
      }
    }
    
    SignInCtrl.$inject = ['$scope'];
    
    return SignInCtrl;
  }
}

SignInCtrlFactory.$inject = ['me'];

export default SignInCtrlFactory;