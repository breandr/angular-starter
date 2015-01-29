//import angular from 'angular';
import './signIn/signIn-module';
import './register/register-module';
// import './forgotPassword/forgotPassword-module';

let accountModule = null;

try {
  angular.module('registerForm');
} catch (e) {
  accountModule = angular.module('registerForm', [
    'account.signIn',
    'account.register',
    // 'account.forgotPassword'
  ])
  .constant('ACCOUNT_MODULE_PATH', 'components/account')
}

export default accountModule;
