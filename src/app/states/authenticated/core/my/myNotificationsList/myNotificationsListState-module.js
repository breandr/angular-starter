//import angular from 'angular';

try {
  angular.module('myApp.states.authenticated.__APP_NAME_CAMEL_CASED__.core.my.myNotificationsList');
} catch (e) {
  angular.module('myApp.states.authenticated.__APP_NAME_CAMEL_CASED__.core.my.myNotificationsList', [])
    .constant('PATH_TO_MY_NOTIFICATIONS_LIST_STATE', 'states/authenticated/core/my/myNotificationsList')
    .config(function ($stateProvider, PATH_TO_MY_NOTIFICATIONS_LIST_STATE) {
      $stateProvider
        .state('authenticated.__APP_NAME_CAMEL_CASED__.core.my.myNotificationsList', {
          url: 'notifications/',
          data: {
            title: 'My Notifications List'
          },
          views: {
            "": {
              templateUrl: PATH_TO_MY_NOTIFICATIONS_LIST_STATE + '/myNotificationsListState-template.html'
            }
          }
        });
    });
}