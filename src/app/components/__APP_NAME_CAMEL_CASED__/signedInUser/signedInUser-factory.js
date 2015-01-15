//import angular from 'angular';

class SignedInUserFactory {
  constructor($injector, $q, $state, localStorageService, User, __APP_NAME_PASCAL_CASED__Api, $mdDialog) {
    let apiEndpoint = __APP_NAME_PASCAL_CASED__Api.one('my');
    let key = 'id';
    let collectionType = null;

    class SignedInUser extends User {
      constructor() {
        super.constructor(localStorageService.get('signedInUser'));

        // Override default User apiEndpoint
        this.apiEndpoint = apiEndpoint;

        // this.setReferenceToOrganisation();
        // this.setReferenceToSites();
        // this.setReferenceToActivityTypes();
        //
        // this.organisation.setReferenceToUsers();
        // this.organisation.setReferenceToOrganisationReports();
        // this.organisation.setReferenceToFundingSources();
        // this.organisation.setReferenceToFundingPrograms();
        // this.organisation.setReferenceToFundingContracts();
        // this.organisation.setReferenceToFundingTags();
        // this.organisation.setReferenceToProcessTemplates();
        // this.organisation.setReferenceToActivityTypes();

        if (this.data) {
          this.loadData();
        }
      }

      loadData() {
        this.sites.getList();

        // this.organisation.apiEndpoint.one('family-activity-type').get().then(response => {
        //   let familyActivityType = this.organisation.familyActivityType = new ActivityType(response.data);
        //
        //   familyActivityType.getListItems('Title');
        //   familyActivityType.getListItems('Gender');
        //   familyActivityType.getListItems('RoleInFamily');
        // });

        // this.activityTypes.getList().then(() => {
        //   this.organisation.familyActivityType = _.find(this.activityTypes.data, activityType => {
        //     return activityType.data.masterActivityType === 5;
        //   });
        //
        //   if(!this.organisation.familyActivityType){
        //     return console.error('Signed-in user does not have access to family activity type');
        //   }
        //
        //   this.organisation.familyActivityType.getListItems('Title');
        //   this.organisation.familyActivityType.getListItems('Gender');
        //   this.organisation.familyActivityType.getListItems('RoleInFamily');
        // });
      }

      setUserDetails(userDetails) {
        localStorageService.set('signedInUser', userDetails);
        this.data = localStorageService.get('signedInUser');
      }

      clearUserDetails() {
        localStorageService.remove('signedInUser');
        this.data = localStorageService.get('signedInUser');
      }

      isAuthenticated() {
        return !_.isEmpty(this.data);
      }

      hasPermission(permission) {
        return this.data && _.contains(this.data.permissions, permission);
      }

      isAuthorised(requiredPermissions) {
        requiredPermissions = _.isArray(requiredPermissions) ? requiredPermissions : [requiredPermissions];

        let missingPermissions = _.reject(requiredPermissions, (requiredPermission) => this.hasPermission(requiredPermission));

        console.warn('signedInUser.isAuthorised is always returning true. Remove this when permissions have been properly implemented');
        return true;
        return _.size(missingPermissions) === 0;
      }

      signIn(email, password, forceSignIn) {
        return __APP_NAME_PASCAL_CASED__Api.all('accounts').customGET('authenticate', {
          email, password, resetToken: forceSignIn
        }).then(response => {
          this.setUserDetails(_.omit(response.data, ['reqParams']));
          this.loadData();

          return response;
        }, (reason) => {
          return $q.reject(reason);
        });
      }

      signOut() {
        return __APP_NAME_PASCAL_CASED__Api.all('accounts').customDELETE('sign-out').then(() => {
          this.clearUserDetails();
          $state.go('anonymous.signIn');
        });
      }

      goToDefaultState() {
        switch (this.data.userType) {
          case 'User':
            return $state.go('authenticated.core.my.profile');
          case 'Admin':
            return $state.go('authenticated.admin.dashboard');
          default:
            return false;
        }
      }
    }

    return new SignedInUser();
  }
}

SignedInUserFactory.$inject = ['$injector', '$q', '$state', 'localStorageService', 'User', '__APP_NAME_PASCAL_CASED__Api', '$mdDialog'];

export
default SignedInUserFactory;