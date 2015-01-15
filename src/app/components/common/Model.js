class Model{
  constructor($resource, data, key, apiEndpoint, collectionType) {
    this.selectOptions = collectionType ? new collectionType() : null;
    this.data = _.isObject(data) ? data : _.isNumber(data) ? {[key]: data} : {};
    this.apiEndpoint = $resource(apiEndpoint + '/:' + key, { [key]: '@' + key }, {}, {
      update: {
        method: 'PUT'
      }
    });
    // this.apiEndpoint = _.isUndefined(this.data[key]) ? $resource(apiEndpoint + '/:' + key, { [key]: '@' + key }) : $resource(apiEndpoint + '/' + this.data[key] + '/:' + key, { [key] : this.data[key]});
  }
  
  get() {
    return this.apiEndpoint.get().then(response => {
      this.data = response.data;
      
      return response;
    });
  }
  
  getSelectOptions(params){
    return this.selectOptions.getList(params);
  }
}

Model.$inject = ['$resource', 'data', 'key', 'apiEndpoint', 'collectionType'];

export default Model;