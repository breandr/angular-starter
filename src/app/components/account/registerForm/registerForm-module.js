//import angular from 'angular';
import 'components/me/me-module';
import registerFormDirective from './registerForm-directive';
import RegisterFormCtrlFactory from './RegisterFormCtrl-controller';

let registerFormModule = null;

try {
  angular.module('account.registerForm');
} catch (e) {
  registerFormModule = angular.module('account.registerForm', [
    'me'
  ])
  .constant('REGISTER_FORM_MODULE_PATH', 'components/account/registerForm')
    .directive('registerForm', registerFormDirective)
    .factory('RegisterFormCtrl', RegisterFormCtrlFactory);
}

export default registerFormModule;
