class Model {
  constructor($resource, data, key, apiRoute, collectionType) {
    this.selectOptions = collectionType ? new collectionType() : null;
    this.data = _.isObject(data) ? data : _.isNumber(data) ? { [key]: data } : {};
    this.apiEndpoint = Model.resource($resource, apiRoute, key);
    this.apiEndpoint.get(this.data);

    // this.apiEndpoint = _.isUndefined(this.data[key]) ? $resource(apiRoute + '/:' + key, { [key]: '@' + key }) : $resource(apiRoute + '/' + this.data[key] + '/:' + key, { [key] : this.data[key]});
  }
  
  static resource($resource, apiRoute, key){
    // const API_URL = 'http://api.__APP_NAME_CAMEL_CASED__.com';
    const API_URL = 'http://localhost:5000/';
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
    
    apiRoute = API_URL + apiRoute + '/:' + key;
    
    return $resource(apiRoute, { [key]: '@' + key }, {
      update: actionConfig({
        method: 'PUT'
      }),
      get: actionConfig({
        method: 'GET'
      }),
      save: actionConfig({
        method: 'POST'
      }),
      query: actionConfig({
        method: 'GET',
        isArray: true
      }),
      delete: actionConfig({
        method: 'DELETE'
      })
    });
  }

  get() {
    return this.apiEndpoint.get().then(response => {
      this.data = response.data;

      return response;
    });
  }

  getSelectOptions(params) {
    return this.selectOptions.getList(params);
  }
}

Model.$inject = ['$resource', 'data', 'key', 'apiRoute', 'collectionType'];

export default Model;