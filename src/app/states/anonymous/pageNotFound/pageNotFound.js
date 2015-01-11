//import angular from 'angular';
// import 'components/__APP_NAME_CAMEL_CASED__/languages/languages';
import PageNotFoundStateCtrl from './pageNotFoundState-controller';

try {
  angular.module('myApp.states.anonymous.pageNotFound');
} catch (e) {
  angular.module('myApp.states.anonymous.pageNotFound', [
    // '__APP_NAME_CAMEL_CASED__.languages'
  ])
    .constant('pathToPageNotFoundState', 'states/anonymous/pageNotFound')
    .controller('PageNotFoundStateCtrl', PageNotFoundStateCtrl)
    .config(function ($stateProvider, pathToPageNotFoundState) {
      $stateProvider
        .state('anonymous.pageNotFound', {
          url: '/page-not-found/',
          templateUrl: pathToPageNotFoundState + '/pageNotFound-template.html',
          controller: 'PageNotFoundStateCtrl'
        });
    });
}