//import angular from 'angular';

try {
  angular.module('myApp.states.authenticated.__APP_NAME_CAMEL_CASED__.core.my.myProfile');
} catch (e) {
  angular.module('myApp.states.authenticated.__APP_NAME_CAMEL_CASED__.core.my.myProfile', [])
    .constant('PATH_TO_MY_PROFILE_STATE', 'states/authenticated/core/my/myProfile')
    .config(function ($stateProvider, PATH_TO_MY_PROFILE_STATE) {
      $stateProvider
        .state('authenticated.__APP_NAME_CAMEL_CASED__.core.my.myProfile', {
          url: 'profile/',
          data: {
            title: 'My Profile'
          },
          views: {
            "": {
              templateUrl: PATH_TO_MY_PROFILE_STATE + '/myProfileState-template.html'
            },
            "appBarActionButtons@authenticated.__APP_NAME_CAMEL_CASED__.core": {
              template: 
`<md-button class="action-button" ng-click="myProfileStateActionButtonsCtrl.actionButtonAction()">
  <i class="fa fa-plus fa-lg">&nbsp;</i><span hide inline-block-md>Action</span>
</md-button>`,
              controllerAs: 'myProfileStateActionButtonsCtrl',
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