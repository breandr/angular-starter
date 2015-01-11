//import angular from 'angular';
import DropdownChecklistDirective from './dropdownChecklist-directive';

try {
  angular.module('dropdownChecklist');
} catch (e) {
  angular.module('dropdownChecklist', [
    'checklist-model'
  ])
    .constant('PATH_TO_DROPDOWN_CHECKBOXES_COMPONENT', 'components/dropdownChecklist')
    .directive('dropdownChecklist', DropdownChecklistDirective);
}