//import angular from 'angular';
import './admin/adminState-module';
import './core/coreState-module';
import AuthenticatedStateCtrl from './AuthenticatedStateCtrl-controller';

try {
  angular.module('__APP_NAME_CAMEL_CASED__.states.authenticated');
} catch (e) {
  angular.module('__APP_NAME_CAMEL_CASED__.states.authenticated', [
      '__APP_NAME_CAMEL_CASED__.states.authenticated.admin',
      '__APP_NAME_CAMEL_CASED__.states.authenticated.core'
    ])
    .constant('PATH_TO_AUTHENTICATED_STATE', 'states/authenticated')
    .controller('AuthenticatedStateCtrl', AuthenticatedStateCtrl)
    .config(function($stateProvider, PATH_TO_AUTHENTICATED_STATE) {
      $stateProvider
        .state('authenticated', {
          abstract: true,
          data: {
            title: 'Authenticated',
            security: {
              allowAnonymous: false,
              requiredPermissions: ['__APP_NAME_CAMEL_CASED__'],
              allowedUserTypes: ['Root', 'User', 'Volunteer', 'Contractor']
            }
          },
          views: {
            "": {
              templateUrl: PATH_TO_AUTHENTICATED_STATE + '/authenticatedState-template.html',
              controllerAs: 'authenticatedStateCtrl',
              controller: 'AuthenticatedStateCtrl'
            }
          }
        });
    })
    .directive('menuLink', function() {
      return {
        scope: {
          section: '='
        },
        template: `<md-button ng-class="{'active' : isSelected()}"
  ng-href="#{{section.url}}">
  {{section.name}}
  <span class="visually-hidden"
    ng-if="isSelected()">
    current page
  </span>
</md-button>`,
        link: function($scope, $element) {
          var controller = $element.parent().controller();

          $scope.isSelected = function() {
            return controller.isSelected($scope.section);
          };
        }
      };
    })
    .directive('menuToggle', function() {
      return {
        scope: {
          section: '='
        },
        template: `<md-button class="md-button-toggle"
  ng-click="toggle()"
  flex layout="row"
  aria-expanded="{{isOpen()}}">
  {{section.name}}
  <span aria-hidden="true" class="md-toggle-icon"
  ng-class="{'toggled' : isOpen()}"></span>
  <span class="visually-hidden">
    Toggle {{isOpen()? 'expanded' : 'collapsed'}}
  </span>
</md-button>

<ul ng-show="isOpen()" class="menu-toggle-list">
  <li ng-repeat="page in section.pages">
    <menu-link section="page"></menu-link>
  </li>
</ul>`,
        link: function($scope, $element) {
          var controller = $element.parent().controller();

          $scope.isOpen = function() {
            return controller.isOpen($scope.section);
          };
          $scope.toggle = function() {
            controller.toggleOpen($scope.section);
          };

          var parentNode = $element[0].parentNode.parentNode.parentNode;
          if (parentNode.classList.contains('parent-list-item')) {
            var heading = parentNode.querySelector('h2');
            $element[0].firstChild.setAttribute('aria-describedby', heading.id);
          }
        }
      };
    });
}