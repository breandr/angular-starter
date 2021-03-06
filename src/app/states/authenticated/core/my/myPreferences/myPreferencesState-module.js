//import angular from 'angular';

try {
  angular.module('__APP_NAME_CAMEL_CASED__.states.authenticated.core.my.myPreferences');
} catch (e) {
  angular.module('__APP_NAME_CAMEL_CASED__.states.authenticated.core.my.myPreferences', [])
    .constant('PATH_TO_MY_PREFERENCES_STATE', 'states/authenticated/core/my/myPreferences')
    .config(function ($stateProvider, PATH_TO_MY_PREFERENCES_STATE) {
      $stateProvider
        .state('authenticated.core.my.myPreferences', {
          url: 'preferences/',
          data: {
            title: 'My Preferences'
          },
          views: {
            "": {
              templateUrl: PATH_TO_MY_PREFERENCES_STATE + '/myPreferencesState-template.html'
            },
            "appBarActionButtons@authenticated.core": {
              template: 
`<md-button class="action-button" ng-click="myPreferencesStateActionButtonsCtrl.actionButtonAction()">
  <i class="fa fa-plus fa-lg">&nbsp;</i><span hide inline-block-md>Action</span>
</md-button>`,
              controllerAs: 'myPreferencesStateActionButtonsCtrl',
              controller: function () {
                this.actionButtonAction = () => {
                  alert("Action Button Clicked");
                };
              }
            }
          }
        });
    });
}