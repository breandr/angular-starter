//import angular from 'angular';
import 'states/states';
import 'templates';

class __APP_NAME_PASCAL_CASED__App {
  constructor() {
    angular.module('__APP_NAME_CAMEL_CASED__', [
      'restangular',
      'ngTable',
      'ngAnimate',
      'LocalStorageModule',
      'angulartics',
      'angulartics.google.analytics',
      'pascalprecht.translate',
      '__APP_NAME_CAMEL_CASED__.states',
      '__APP_NAME_CAMEL_CASED__.templates'
    ])
      .constant('ACTIVITY_COMMENCEMENT_DATE_MAX_DAYS_AHEAD', 3)
      .constant('datepickerPopupConfig', {
        datepickerPopup: "MMMM dd yyyy",
        currentText: 'Today',
        clearText: 'Clear',
        closeText: 'Done',
        closeOnDateSelection: true,
        appendToBody: true,
        showButtonBar: true
      }).constant('paginationConfig', {
        itemsPerPage: 20,
        boundaryLinks: true,
        directionLinks: true,
        firstText: '«',
        previousText: '‹',
        nextText: '›',
        lastText: '»'
      })
      .config(($urlRouterProvider, $locationProvider, $analyticsProvider, $sceDelegateProvider, $translateProvider, localStorageServiceProvider, cfpLoadingBarProvider, uiSelectConfig) => {
        $sceDelegateProvider.resourceUrlWhitelist([
          'self',
          'https://api.__APP_NAME_CAMEL_CASED__.net.au/**',
          'http://localhost:91/**'
        ]);
        uiSelectConfig.refreshDelay = 500;
        cfpLoadingBarProvider.latencyThreshold = 0;
        cfpLoadingBarProvider.spinnerTemplate = `<div id="loading-bar-spinner">
         <div class="spinkit-wave">
           <div class="rect1"></div>
           <div class="rect2"></div>
           <div class="rect3"></div>
           <div class="rect4"></div>
           <div class="rect5"></div>
         </div>
        </div>`;

        $translateProvider.useStaticFilesLoader({
          prefix: 'app/languages/',
          suffix: '.json'
        });
        $translateProvider.preferredLanguage('en');
        // cfpLoadingBarProvider.spinnerTemplate = '<md-circular-progress id="loading-bar-spinner" md-mode="indeterminate"></md-circular-progress>';
        $analyticsProvider.virtualPageviews(false);
        // localStorageServiceProvider configuration
        localStorageServiceProvider.setPrefix('__APP_NAME_CAMEL_CASED__');
        // localStorageServiceProvider.setStorageType('sessionStorage');

        // $urlRouteProvider configuration
        $urlRouterProvider
          .rule(($injector, $location) => {
            let path    = $location.path();
            let search  = $location.search();
            let params;

            if (path[path.length - 1] === '/') {
              return;
            }

            if (Object.keys(search).length === 0) {
              return path + '/';
            }

            params = [];
            
            angular.forEach(search, (v, k) => {
              params.push(k + '=' + v);
            });
            
            return path + '/?' + params.join('&');
          });

        $urlRouterProvider
          .when('/', '/sign-in/')
          .otherwise('/page-not-found/');

        // $locationProvider configuration
        $locationProvider.html5Mode(true); // SET THIS TO TRUE FOR WEB APP BUILD ONLY
      })
      .run(($rootScope, $state, $translate, signedInUser, $window, $location) => {
        $rootScope.$watch(()=> Platform.performMicrotaskCheckpoint());
        $rootScope
          .$on('$stateChangeStart', (event, toState) => {
            let stateSecurity   = toState.data.security;
            let allowAnonymous  = !_.isUndefined(stateSecurity.allowAnonymous) && stateSecurity.allowAnonymous;

            if (allowAnonymous) {
              return true;
            } else if (!signedInUser.isAuthenticated()) {
              event.preventDefault();
              return $state.go('anonymous.signIn');
            } else if (!signedInUser.isAuthorised(stateSecurity.requiredPermissions || [])) {
              event.preventDefault();
              return $state.go('^');
            }
          });

        // analytics
        $rootScope
          .$on('$stateChangeSuccess',
            (event, toState) => {
              if (!$window.ga) {
                return;
              }

              if (signedInUser.data && signedInUser.data.userGuid) {
                $window.ga('set', '&uid', signedInUser.data.userGuid);
              }

              $window.ga('send', 'pageview', {
                page: $location.path(),
                title: toState.data.title || ''
              });
            });
        /*FastClick.attach(document.body);

  document.addEventListener('backbutton', (e =>) {
    let navDrawer = angular.element('.nav-drawer');

    if (angular.element('.overlay.fadeIn').length > 0) {
      e.preventDefault();
    } else if (navDrawer.hasClass('fadeInLeft')) {
      e.preventDefault();
      $rootScope.$broadcast('navDrawer.hide');
    } else if (angular.element('body.modal-open').length > 0) {
      angular.element('.modal.in').modal('hide');
    } else {
      navigator.app.backHistory();
    }
  }, false);*/
      });
  }
}

export default __APP_NAME_PASCAL_CASED__App;