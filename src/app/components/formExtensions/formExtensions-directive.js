export default function() {
  return {
    restrict: 'A',
    require: 'form',
    link: function (scope, element, attrs, formCtrl) {
      let formName = element[0].name;
      let extensions = {};
      extensions.submitAttempted = false;
      extensions.pristine = null;

      extensions.getPristine = function () {
        return _.clone(this.pristine);
      };

      extensions.setPristine = function (pristine) {
        this.pristine = _.clone(pristine);
      };

      extensions.isFieldInvalid = function (fieldName) {
        let field = formCtrl[fieldName];
        return field.$invalid && (field.$dirty || field.$touched || extensions.submitAttempted);
      };

      extensions.isFormValid = function (focusFirstInvalidField = true) {
        extensions.submitAttempted = true;

        if (formCtrl.$invalid) {
          if (focusFirstInvalidField) {
            let firstInvalidField = element.find('.form-control.ng-invalid:first');
            angular.element(firstInvalidField).focus();
          }
          return false;
        }

        return true;
      };

      scope[formName].extensions = extensions;
    }
  };
}