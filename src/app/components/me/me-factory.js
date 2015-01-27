//import angular from 'angular';
import Model from 'components/common/Model';

class SignedInUserFactory {
  constructor($http, $resource, $injector, $q, $state, localStorageService, User, $mdDialog, $auth) {
    let apiEndpoint = Model.resource($resource, 'my', null, 'id');
    let key = 'id';
    let collectionType = null;

    class SignedInUser extends User {
      constructor() {
        super.constructor(localStorageService.get('me'));

        // Override default User apiEndpoint
        this.apiEndpoint = apiEndpoint;

        ///TEST CRAP
        // this.apiEndpoint.query();
        // this.apiEndpoint.query({
        //   'ids[]': [1,2],
        //   status: 3
        // });
        // this.apiEndpoint.get();
        // this.apiEndpoint.get({
        //   id: 1,
        //   status: 2
        // });
        // this.apiEndpoint.update({
        //   id: 1,
        //   status: 2
        // });
        // this.apiEndpoint.save({
        //   id: 1,
        //   status: 2
        // });
        // this.apiEndpoint.remove({
        //   id: [1,2],
        //   status: 2
        // });
        // this.apiEndpoint.remove({
        //   id: [1,2]
        // });
        // this.apiEndpoint.add({
        //   id: [1,2]
        // });
        ///TEST CRAP

        if (this.data.authToken) {
          this.setAuthHeader();
          this.loadData();
        }
      }

      setAuthHeader(){
        $http.defaults.headers.common.Authorization = 'Bearer ' + this.data.authToken;
      }

      loadData() {
        this.apiEndpoint.get();
      }

      setUserDetails(userDetails) {
        localStorageService.set('me', userDetails);
        this.data = localStorageService.get('me');
      }

      clearUserDetails() {
        localStorageService.remove('me');
        this.data = {};
      }

      register(email, password){
        return $auth.signup({ email, password });
      }

      isAuthenticated() {
        return $auth.isAuthenticated();
        return !_.isEmpty(this.data);
      }

      hasPermission(permission) {
        return this.data && _.contains(this.data.permissions, permission);
      }

      isAuthorised(requiredPermissions) {
        requiredPermissions = _.isArray(requiredPermissions) ? requiredPermissions : [requiredPermissions];

        let missingPermissions = _.reject(requiredPermissions, (requiredPermission) => this.hasPermission(requiredPermission));

        console.warn('me.isAuthorised is always returning true. Remove this when permissions have been properly implemented');
        return true;
        return _.size(missingPermissions) === 0;
      }

      socialSignIn(provider){
        return $auth.authenticate(provider);
      }

      localSignIn(provider, email, password) {
        if(provider === 'local'){
          return $auth.login({
            email, password
          }).then(response => {
            this.setUserDetails(_.omit(response.data, ['reqParams']));
            this.loadData();

            return response;
          }, reason => {
            return $q.reject(reason);
          });
          // return $resource('accounts').get('authenticate', {
          //   email, password
          // }).then(response => {
          //   this.setUserDetails(_.omit(response.data, ['reqParams']));
          //   this.loadData();
          //
          //   return response;
          // }, (reason) => {
          //   return $q.reject(reason);
          // });
        }else{
          $auth.authenticate(provider);
        }
      }

      signOut() {
        return $auth.logout().then(() => {
          this.clearUserDetails();
          $state.go('anonymous.accounts.signIn');
        });
        // return $resource('accounts').delete('deauthenticate').then(() => {
        //   this.clearUserDetails();
        //   $state.go('anonymous.accounts.signIn');
        // });
      }

      goToDefaultState() {
        return $state.go('authenticated.core.my.myProfile');
      }
    }

    return new SignedInUser();
  }
}

SignedInUserFactory.$inject = ['$http', '$resource', '$injector', '$q', '$state', 'localStorageService', 'User', '$mdDialog', '$auth'];

export default SignedInUserFactory;
