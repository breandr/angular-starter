//import angular from 'angular';
// import 'components/csnet/languages/languages';
import PageNotFoundStateCtrl from './pageNotFoundState-controller';

try {
  angular.module('csnetApp.states.anonymous.pageNotFound');
} catch (e) {
  angular.module('csnetApp.states.anonymous.pageNotFound', [
    // 'csnet.languages'
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