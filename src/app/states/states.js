//import angular from 'angular';
import './anonymous/anonymous';
import './authenticated/authenticatedState-module';

try {
  angular.module('csnetApp.states');
} catch (e) {
  angular.module('csnetApp.states', [
    'ui.router',
    'csnetApp.states.anonymous',
    'csnetApp.states.authenticated'
  ]);
}