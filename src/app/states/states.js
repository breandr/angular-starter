//import angular from 'angular';
import './anonymous/anonymous';
import './authenticated/authenticatedState-module';

try {
  angular.module('myApp.states');
} catch (e) {
  angular.module('myApp.states', [
    'ui.router',
    'myApp.states.anonymous',
    'myApp.states.authenticated'
  ]);
}