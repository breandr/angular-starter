class Model {
  constructor($resource, data, key, apiRoute, parentResourceUrl, collectionType) {
    this.selectOptions = collectionType ? new collectionType() : null;
    this.data = _.isObject(data) ? data : _.isNumber(data) ? { [key]: data } : {};
    this.apiEndpoint = Model.resource($resource, apiRoute, parentResourceUrl, key);

    // this.apiEndpoint = _.isUndefined(this.data[key]) ? $resource(apiRoute + '/:' + key, { [key]: '@' + key }) : $resource(apiRoute + '/' + this.data[key] + '/:' + key, { [key] : this.data[key]});
  }

  static resource($resource, apiRoute, parentResourceUrl, key) {
    // const API_URL = 'http://api.__APP_NAME_CAMEL_CASED__.com';
    const API_URL = 'http://localhost:5000';
    let httpConfig = {
      withCredentials: true,
      cache: true,
      interceptor: {
        'response': response => {
          console.log(response);

          return response;
        },
        'responseError': rejection => {
          let error = '';

          switch (rejection.status) {
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

          // $mdToast.show({
          //   template: '<md-toast class="toast-error-' + rejection.status + '">' + error + '</md-toast>',
          //   duration: 4000,
          //   position: 'top right'
          // });
        }
      }
    };
    let actionConfig = config => _.extend(config, httpConfig);
    let signedInUser = sessionStorage.getItem('signedInUser');

    if (signedInUser) {
      httpConfig.headers.Authorization = signedInUser.authToken;
    }
    
    let baseUrl = (parentResourceUrl || API_URL);
    let resourceUrl = baseUrl + '/' + apiRoute;
    let resourceUrlWithKey = resourceUrl + '/:' + key;

    return $resource(resourceUrlWithKey, {
      [key]: '@' + key
    }, {
      query: actionConfig({
        method: 'GET',
        isArray: true
      }),
      get: actionConfig({
        method: 'GET'
      }),
      update: actionConfig({
        method: 'PUT'
      }),
      save: actionConfig({
        method: 'POST'
      }),
      delete: actionConfig({
        method: 'DELETE'
      }),
      add: actionConfig({
        method: 'POST'
      }),
      remove: actionConfig({
        method: 'DELETE'
      })
    });
  }

  get() {
    return this.apiEndpoint.get().$promise.then(response => {
      this.data = response.data;

      return response;
    });
  }

  getSelectOptions(params) {
    return this.selectOptions.query(params);
  }
}

Model.$inject = ['$resource', 'data', 'key', 'apiRoute', 'parentResourceUrl', 'collectionType'];

export default Model;