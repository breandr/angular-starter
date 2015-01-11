export default function() {
  class FormValidator {
    constructor(form, formCtrl) {
      this.form = form;
      this.formCtrl = formCtrl;
      this.submitAttempted = false;
    }

    isFieldInvalid(fieldName) {
      let field = this.formCtrl[fieldName];
      return field.$invalid && (field.$dirty || field.$touched || this.submitAttempted);
    }

    isFormValid(focusFirstInvalidField = true) {
      this.submitAttempted = true;

      if (this.formCtrl.$invalid) {
        if (focusFirstInvalidField) {
          let firstInvalidField = this.form.find('.form-control.ng-invalid:first');
          angular.element(firstInvalidField).focus();
        }
        return false;
      }

      return true;
    }
  }

  return FormValidator;
}