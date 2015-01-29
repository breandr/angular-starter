class ResetPasswordFormCtrlFactory{
  constructor($location, $http, $state, me) {
    class ResetPasswordFormCtrl {
      constructor($scope){
        this.$scope = $scope;
        this.getPasswordResetRequest();
      }

      getPasswordResetRequest(){
        return $http.get('http://localhost:5000/auth/password-reset-request', {uuid: $location.search().uuid}).success((data, status, headers, config) => {
          if(status == 404){
            return $state.go('anonymous.accounts.signIn');
          }

          this.email = data.email;
        });
      }

      resetPassword() {
        if (this.$scope.validator.isFormValid()) {
          return $http.post('http://localhost:5000/auth/password-reset-request/reset-password', {uuid: $location.search().uuid, password: this.formData.password}).success((data, status, headers, config) => {
            me.localSignIn(this.email, this.formData.password);
          });
        }
      }
    }

    ResetPasswordFormCtrl.$inject = ['$scope'];

    return ResetPasswordFormCtrl;
  }
}

ResetPasswordFormCtrlFactory.$inject = ['$location', '$http', '$state', 'me'];

export default ResetPasswordFormCtrlFactory;
