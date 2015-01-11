class UpsertCtrl {
  constructor(FormValidator, scope, element, formName, record) {
    this.FormValidator = FormValidator;
    this.record = record;
    this.scope = scope;
    this.element = element;
    this.formName = formName;

    this.formData = _.cloneDeep(this.record.data);
    this.pristineData = _.clone(this.formData);
    this.setupValidator();
  }

  submit(map = data => data) {
    if (this.validator.isFormValid()) {
      let mappedData = map(this.formData);
      let request = this.record.data.id ? this.record.apiEndpoint.put(mappedData) : this.record.apiEndpoint.post(mappedData);
      
      return request.then(() => {
        this.record = _.clone(this.formData);
        this.formData = _.clone(this.pristineData);
      });
    }

    return new Promise((resolve, reject) => reject('invalid'));
  }

  reset() {
    this.formData = _.clone(this.pristineData);
  }

  setupValidator() {
    let deregisterFormWatcher = this.scope.$watch(this.formName, formCtrl => {
      let form = this.element.find('form:first');

      this.validator = new this.FormValidator(form, formCtrl);
      deregisterFormWatcher();
    });
  }

  ifUiSelectNull(datum, valueProperty, defaultValue){
    return (datum && datum.selected && datum.selected.data[valueProperty]) || defaultValue;
  }
}

UpsertCtrl.$inject = ['FormValidator', 'scope', 'element', 'formName', 'record'];

export default UpsertCtrl;