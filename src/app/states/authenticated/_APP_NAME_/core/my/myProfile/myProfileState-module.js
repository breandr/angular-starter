//import angular from 'angular';

try {
  angular.module('csnetApp.states.authenticated.csnet.core.my.myProfile');
} catch (e) {
  angular.module('csnetApp.states.authenticated.csnet.core.my.myProfile', [])
    .constant('PATH_TO_MY_PROFILE_STATE', 'states/authenticated/csnet/core/my/myProfile')
    .config(function ($stateProvider, PATH_TO_MY_PROFILE_STATE) {
      $stateProvider
        .state('authenticated.csnet.core.my.myProfile', {
          url: 'profile/',
          data: {
            title: 'My Profile'
          },
          views: {
            "": {
              templateUrl: PATH_TO_MY_PROFILE_STATE + '/myProfileState-template.html'
            },
            "appBarActionButtons@authenticated.csnet.core": {
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