import 'components/__APP_NAME_CAMEL_CASED__/me/me-module';

class AuthenticatedStateCtrl {
  constructor($scope, $timeout, $q, $state, $mdSidenav, me) {
    this.$q = $q;
    this.$mdSidenav = $mdSidenav;
    this.$timeout = $timeout;
    this.$state = $state;
    this.stateTitle = '__APP_TITLE__';
    this.me = me;
    
    this.user = me.data;
    
    angular.element('body').removeClass('anonymous').addClass('authenticated');

    $scope.$watch(() => $state.current.data.title, newValue => {
      this.stateTitle = newValue;
    });

    $scope.$watch(() => this.$mdSidenav('sideNav').isOpen(), isOpen => {
      let navDrawerToggle = angular.element('#sideNav .nav-drawer-toggle');

      if (isOpen) {
        navDrawerToggle.addClass('open');
      } else {
        navDrawerToggle.removeClass('open');
      }
    });
  }

  showQuickSearchField($event) {
    this.$timeout(() => {
      let quickSearch = angular.element('#appBarQuickSearch [name="quickSearch"]');
      let quickSearchScope = quickSearch.data().$scope;
      quickSearchScope.$select.activate();
    });
  }

  toggleSideNav($event) {
    $event.preventDefault();
    $event.stopPropagation();
    this.$mdSidenav('sideNav').toggle();
  }

  onQuickSearchSelect($item, $model) {
    switch ($item.type) {
      case 'Activities':
        this.$state.go('authenticated.core.activities.activity.activityOverview', {
          activityId: $item.id
        });
        break;
      case 'Clients':
        this.$state.go('authenticated.core.clients.client.clientOverview', {
          clientId: $item.id
        });
        break;
    }
  }

  quickSearch(search) {
    if (!search) return;
  }

  lockScreen() {}

  signOut() {
    this.me.signOut();
  }
}

AuthenticatedStateCtrl.$inject = ['$scope', '$timeout', '$q', '$state', '$mdSidenav', 'me'];

export default AuthenticatedStateCtrl;