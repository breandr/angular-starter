class __APP_NAME_PASCAL_CASED__ApiFactory{
  constructor($mdToast, localStorageService, API_URL){
    var restAngular = Restangular.withConfig(function (Configurer) {
      Configurer.setBaseUrl(API_URL);
      Configurer.setFullResponse(true);
      // Configurer.setDefaultHttpFields({
      //   withCredentials: true
      // });

      /*var xsrfConfig = {
            xsrfCookieName: 'XSRF-TOKEN',
            xsrfHeaderName: 'X-XSRF-TOKEN'
          };*/

      // Add Authorization Header
      Configurer.addFullRequestInterceptor(function () {
        var signedInUser = localStorageService.get('signedInUser');

        if (!signedInUser) {
          return;
        }

        var authToken = signedInUser.authToken;

        return {
          headers: {
            "Authorization": authToken
            /*,
                "X-XSRF-TOKEN": xsrfToken*/
          }
        };
      });

      // Extract response data and metadata
      Configurer.addResponseInterceptor(function (data, operation) {
        var extractedData;

        if (operation === "getList" && !!data && !!data.data) {
          extractedData = _.clone(data.data);
          extractedData.meta = _.omit(data, 'data');
        } else {
          extractedData = data;
        }

        return extractedData;
      });

      // Original response interceptor
      Configurer.addResponseInterceptor(function (response) {
        var newResponse = response;

        if (angular.isArray(response)) {
          newResponse._originalResponse = [];
          angular.forEach(newResponse, function (value, key) {
            let originalResponse = angular.copy(value);
            newResponse[key]._originalResponse = originalResponse;
            newResponse._originalResponse.push(originalResponse);
          });
        } else if (!_.isEmpty(response)) {
          newResponse._originalResponse = angular.copy(response);
        }

        return newResponse;
      });

      // Hide request indicator; show response indicator
      Configurer.setErrorInterceptor(function (response) {
        let error = '';
        //TODO: hide feedback

        switch (response.status) {
        case 401:
          // show sign in prompt
          // on success: resubmit request using response.config
          error = 'Unauthenticated';
          break;
        case 403:
          error = 'Unauthorised';
          break;
        case 404:
          error = 'Resource not found';
          break;
        case 500:
          error = 'Server error';
          break;
        default:
          error = 'Unknown error';
          break;
        }
        
        $mdToast.show({
          template: '<md-toast class="toast-error-' + response.status + '">' + error + '</md-toast>',
          duration: 4000,
          position: 'top right'
        });
        
        return true;
      });

      Configurer.setParentless([
        'reports'
      ]);
    });

    restAngular.getFromCacheOrLoad = (cache, load, forceReload) => _.isUndefined(cache) || cache === null || forceReload ? load() : new Promise(() => cache);/*{
      if (_.isUndefined(cache) || cache === null || forceReload) {
        return load();
      } else {
        return new Promise(() => cache);
        // let deferred = $q.defer();
        // deferred.resolve(cache);
        //
        // return deferred.promise;
      }
    }*/

    return restAngular;
  }
}

__APP_NAME_PASCAL_CASED__ApiFactory.$inject = ['$mdToast', 'localStorageService', 'API_URL'];

export default __APP_NAME_PASCAL_CASED__ApiFactory;