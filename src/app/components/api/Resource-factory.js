class __APP_NAME_PASCAL_CASED__ResourceFactory{
  constructor($http, $resource, $mdToast, localStorageService, API_URL){
    class __APP_NAME_PASCAL_CASED__Resource{
      constructor(){
        _.extend(this, $resource);
        console.log((new $resource().prototype));
      }
    }
    
    return new __APP_NAME_PASCAL_CASED__Resource();
  }
}

__APP_NAME_PASCAL_CASED__ResourceFactory.$inject = ['$http', '$resource', '$mdToast', 'localStorageService', 'API_URL'];

export default __APP_NAME_PASCAL_CASED__ResourceFactory;