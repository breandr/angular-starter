class Model{
  constructor(CsnetApi, List, data, key, apiEndpoint, collectionType) {
    this.List = List;
    this.getFromCacheOrLoad = CsnetApi.getFromCacheOrLoad;
    this.selectOptions = collectionType ? new collectionType() : null;
    this.listItems = {};
    this.data = _.isObject(data) ? data : _.isNumber(data) ? {[key]: data} : {};
    this.apiEndpoint = _.isUndefined(this.data[key]) ? CsnetApi.all(apiEndpoint.route) : CsnetApi.one(apiEndpoint.route, this.data[key]);
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
  
  setReferences(){}
  
  getOptions(){}
  
  getStaticListItems(internalReference, params, forceReload) {
    return this.List.getListItemsByInternalReference(internalReference, params, this.List.staticListItems[internalReference], forceReload).then(response => {
      this.listItems[internalReference] = this.List.staticListItems[internalReference] = response.data;

      return response;
    });
  }
  
  getListItems(internalReference, params, forceReload) {
    return this.List.getListItemsByInternalReference(internalReference, params, this.listItems[internalReference], forceReload).then(response => {
      this.listItems[internalReference] = response.data;

      return response;
    });
  }
}

Model.$inject = ['CsnetApi', 'List', 'data', 'key', 'apiEndpoint', 'collectionType'];

export default Model;