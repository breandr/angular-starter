//import angular from 'angular';
// import __APP_NAME_PASCAL_CASED__Api from './__APP_NAME_PASCAL_CASED__Api-factory';

try {
  angular.module('__APP_NAME_CAMEL_CASED__.api');
} catch (e) {
  angular.module('__APP_NAME_CAMEL_CASED__.api', [
    'LocalStorageModule',
    'ngMaterial',
    'ngResource'
  ])
  // .factory('__APP_NAME_PASCAL_CASED__Api', __APP_NAME_PASCAL_CASED__Api)
  .constant('API_URL', 'http://api.__APP_NAME_CAMEL_CASED__.com')
    // .config(['$httpProvider', 'API_URL', 'localStorageService'
    //
    //   function($httpProvider, API_URL, localStorageService) {
    //     // Set base URL
    //     $httpProvider.interceptors.push($q => {
    //       'request': config => {
    //         config.url = API_URL + config.url;
    //
    //         return config || $q.when(config);
    //       }
    //     });
    //
    //     // Add Authorization Header
    //     $httpProvider.interceptors.push($q => {
    //       'request': config => {
    //         let signedInUser = localStorageService.get('signedInUser');
    //
    //         if (!signedInUser) {
    //           return config || $q.when(config);
    //         }
    //
    //         let authToken = signedInUser.authToken;
    //
    //         config.headers.Authorization = authToken;
    //         config.headers['X-XSRF-TOKEN'] = xsrfToken
    //
    //         return config || $q.when(config);
    //       }
    //     });
    //
    //     // Hide request indicator; show response indicator
    //     $httpProvider.interceptors.push($q => {
    //       'responseError': rejection => {
    //         let error = '';
    //         //TODO: hide feedback
    //
    //         switch (response.status) {
    //           case 401:
    //             // show sign in prompt
    //             // on success: resubmit request using response.config
    //             error = 'Unauthenticated';
    //             break;
    //           case 403:
    //             error = 'Unauthorised';
    //             break;
    //           case 404:
    //             error = 'Resource not found';
    //             break;
    //           case 500:
    //             error = 'Server error';
    //             break;
    //           default:
    //             error = 'Unknown error';
    //             break;
    //         }
    //
    //         $mdToast.show({
    //           template: '<md-toast class="toast-error-' + response.status + '">' + error + '</md-toast>',
    //           duration: 4000,
    //           position: 'top right'
    //         });
    //       }
    //     });
    //
    //     // restAngular.getFromCacheOrLoad = (cache, load, forceReload) => _.isUndefined(cache) || cache === null || forceReload ? load() : new Promise(() => cache);
    //   }
    // ]);
}