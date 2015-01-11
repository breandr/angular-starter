import 'components/__APP_NAME_CAMEL_CASED__/signedInUser/signedInUser-module';

class AuthenticatedStateCtrl {
  constructor($scope, $timeout, $q, $state, $mdSidenav, signedInUser, __APP_NAME_PASCAL_CASED__Api) {
    this.$q = $q;
    this.$mdSidenav = $mdSidenav;
    this.$timeout = $timeout;
    this.$state = $state;
    this.stateTitle = '__APP_TITLE__';
    this.signedInUser = signedInUser;
    this.__APP_NAME_PASCAL_CASED__Api = __APP_NAME_PASCAL_CASED__Api;
    
    this.user = signedInUser.data;
    
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
        this.$state.go('authenticated.__APP_NAME_CAMEL_CASED__.core.activities.activity.activityOverview', {
          activityId: $item.id
        });
        break;
      case 'Clients':
        this.$state.go('authenticated.__APP_NAME_CAMEL_CASED__.core.clients.client.clientOverview', {
          clientId: $item.id
        });
        break;
    }
  }

  quickSearch(search) {
    if (!search) return;

    return this.$q.all([
      this.__APP_NAME_PASCAL_CASED__Api.all('activities').all('quick-search').getList({
        search
      }).then(response => {
        let activities = _.map(response.data, (searchResult, index) => {
          searchResult.type = 'Activities';
          searchResult.isFirstActivityResult = index === 0;
          
          return searchResult;
        });
        
        return activities;
      }),
      this.__APP_NAME_PASCAL_CASED__Api.all('clients').all('quick-search').getList({
        search
      }).then(response => {
        let clients = _.map(response.data, (searchResult, index) => {
          searchResult.type = 'Clients';
          searchResult.isFirstClientResult = index === 0;
          
          return searchResult;
        });
        
        return clients;
      })
    ]).then(searchResults => {
      this.quickSearchResults = [].concat(searchResults[0], searchResults[1]);
    });
  }

  lockScreen() {}

  signOut() {
    this.signedInUser.signOut();
  }
}

AuthenticatedStateCtrl.$inject = ['$scope', '$timeout', '$q', '$state', '$mdSidenav', 'signedInUser', '__APP_NAME_PASCAL_CASED__Api'];

export default AuthenticatedStateCtrl;