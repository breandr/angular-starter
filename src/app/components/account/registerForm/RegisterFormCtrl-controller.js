class RegisterFormCtrlFactory{
  constructor(me) {
    class RegisterFormCtrl {
      constructor($scope){
        this.$scope = $scope;
      }

      register() {
        if (this.$scope.validator.isFormValid()) {
          me.register(this.formData.email, this.formData.password).then(() => {
            this.$scope.registerForm.submitted = false;

            return me.goToDefaultState();
          });
        }
      }
    }

    RegisterFormCtrl.$inject = ['$scope'];

    return RegisterFormCtrl;
  }
}

RegisterFormCtrlFactory.$inject = ['me'];

export default RegisterFormCtrlFactory;
