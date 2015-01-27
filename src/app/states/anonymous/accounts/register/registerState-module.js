//import angular from 'angular';
import 'components/registerForm/registerForm-module';
import RegisterStateCtrl from './registerStateCtrl-controller';

try {
  angular.module('__APP_NAME_CAMEL_CASED__.states.anonymous.accounts.register');
} catch (e) {
  angular.module('__APP_NAME_CAMEL_CASED__.states.anonymous.accounts.register', [
    // '__APP_NAME_CAMEL_CASED__.languages',
    'registerForm',
    'me'
  ])
    .constant('PATH_TO_REGISTER_STATE', 'states/anonymous/accounts/register')
    .config(function ($stateProvider, PATH_TO_REGISTER_STATE) {
      $stateProvider
        .state('anonymous.accounts.register', {
          url: '/register/',
          templateUrl: PATH_TO_REGISTER_STATE + '/registerState-template.html',
          controller: 'RegisterStateCtrl'
        });
    })
    .controller('RegisterStateCtrl', RegisterStateCtrl);
}
