class AuthenticatedStateCtrl {
  constructor($scope, $timeout, $q, $state, $mdSidenav, me) {
    this.$q = $q;
    this.$mdSidenav = $mdSidenav;
    this.$timeout = $timeout;
    this.$state = $state;
    this.stateTitle = '__APP_TITLE__';
    this.me = me;
    this.user = me.data;
    
    this.sections = [{
      name: 'Home',
      url: '/',
      type: 'link'
    }, {
      name: 'Admin',
      type: 'heading',
      children: [{
        name: 'Users',
        type: 'toggle',
        pages: [{
          name: 'Create User',
          url: '/users/create',
          type: 'link'
        }, {
          name: 'Find User',
          url: '/users',
          type: 'link'
        }]
      }]
    }];

    $scope.$watch(() => $state.current.data.title, newValue => {
      this.stateTitle = newValue;
    });
  }

  openMenu() {
    this.$timeout(() => {
      this.$mdSidenav('sideNav').open();
    });
  }

  toggleSelectSection(section) {
    this.openedSection = (this.openedSection === section ? null : section);
  }

  toggleOpen(section) {
    this.toggleSelectSection(section);
  }

  isOpen(section) {
    return this.isSectionSelected(section);
  }

  isPageSelected(page) {
    return this.currentPage === page;
  }

  isSelected(page) {
    return this.isPageSelected(page);
  }

  isSectionSelected(section) {
    var selected = false;
    var openedSection = this.openedSection;

    if (openedSection === section) {
      selected = true;
    } else if (section.children) {
      section.children.forEach(function(childSection) {
        if (childSection === openedSection) {
          selected = true;
        }
      });
    }
    return selected;
  }

  toggleSideNav($event) {
    $event.preventDefault();
    $event.stopPropagation();
    this.$mdSidenav('sideNav').toggle();
  }

  lockScreen() {}

  signOut() {
    this.me.signOut();
  }
}

AuthenticatedStateCtrl.$inject = ['$scope', '$timeout', '$q', '$state', '$mdSidenav', 'me'];

export default AuthenticatedStateCtrl;