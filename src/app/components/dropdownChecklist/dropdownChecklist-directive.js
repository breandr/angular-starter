import DropdownChecklistCtrl from './DropdownChecklistCtrl-controller';

function dropdownChecklistDirective(PATH_TO_DROPDOWN_CHECKBOXES_COMPONENT) {
  return {
    restrict: 'E',
    templateUrl: PATH_TO_DROPDOWN_CHECKBOXES_COMPONENT + '/dropdownChecklist-template.html',
    scope: {
      items: '=',
      label: '@',
      itemLabelProp: '@?',
      itemValueProp: '@?'
    },
    bindToController: true,
    controllerAs: 'dropdownChecklistCtrl',
    controller: DropdownChecklistCtrl
  };
}

dropdownChecklistDirective.$inject = ['PATH_TO_DROPDOWN_CHECKBOXES_COMPONENT'];

export default dropdownChecklistDirective;