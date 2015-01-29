class ForgotPasswordFormCtrlFactory{
  constructor($http) {
    class ForgotPasswordFormCtrl {
      constructor($scope){
        this.$scope = $scope;
      }

      sendForgotPasswordEmail() {
        if (this.$scope.validator.isFormValid()) {
          return $http.post('http://localhost:5000/auth/forgot-password', {email: this.formData.email}).success((data, status, headers, config) => {
            this.isEmailSent = true;
          });
        }
      }
    }

    ForgotPasswordFormCtrl.$inject = ['$scope'];

    return ForgotPasswordFormCtrl;
  }
}

ForgotPasswordFormCtrlFactory.$inject = ['$http'];

export default ForgotPasswordFormCtrlFactory;
