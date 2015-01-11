//import angular from 'angular';

try {
  angular.module('csnetApp.states.authenticated.csnet.core.my.myNotificationsList');
} catch (e) {
  angular.module('csnetApp.states.authenticated.csnet.core.my.myNotificationsList', [])
    .constant('PATH_TO_MY_NOTIFICATIONS_LIST_STATE', 'states/authenticated/csnet/core/my/myNotificationsList')
    .config(function ($stateProvider, PATH_TO_MY_NOTIFICATIONS_LIST_STATE) {
      $stateProvider
        .state('authenticated.csnet.core.my.myNotificationsList', {
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