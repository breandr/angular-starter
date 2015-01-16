import Model from './Model';

class Collection{
  constructor($resource, $injector, modelName, parentResourceApiRoute){
    this.Model = $injector.get(modelName);
    this.apiEndpoint = Model.resource($resource, parentResourceApiRoute || Model.apiRoute, Model.key);
    // this.apiEndpoint = apiEndpoint ? apiEndpoint.all(this.apiRoute) : __APP_NAME_PASCAL_CASED__Api.all(this.apiRoute);
    this.data = null;
  }
  
  getList(params, apiEndpoint = this.apiEndpoint) {
    return apiEndpoint.getList(params).then(response => this.setData(response));
  }
  
  setData(response){
    this.data = _.map(response.data, datum => this.create(datum._originalResponse));
    
    return response;
  }
  
  add(resource){
    this.data = this.data || [];
    
    this.data.push(resource);
  }
  
  create(data){
    return new this.Model(data)
  }
  
  post(keys){
    // keys = keys instanceof Array ? keys : [keys];
    return this.apiEndpoint.post(keys);
  }
  
  put(keys){
    // keys = keys instanceof Array ? keys : [keys];
    keys = _.isArray(keys) ? keys.join(';') : keys;
    return this.apiEndpoint.all(keys).customPUT(keys); //.put() is not available on restangular collections
  }
  
  delete(keys){
    // keys = keys instanceof Array ? keys.join(';') : keys;
    keys = _.isArray(keys) ? keys.join(';') : keys;
    
    return this.apiEndpoint.all(keys).remove();//Restangular Hack: cannot do this.apiEndpoint.one(keys) as it expects this.apiEndpoint.one('plan-actions', keys); use .all instead
    //return this.apiEndpoint.remove(keys);//Alternate DELETE style: send keys in body
  }
}

Collection.$inject = ['$resource', '$injector', 'modelName', 'parentResourceApiRoute'];

export default Collection;