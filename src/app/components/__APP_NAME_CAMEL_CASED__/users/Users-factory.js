import Collection from 'components/common/Collection';

class UsersFactory {
  constructor($injector) {
    let apiRoute = 'users';
    let collectionOf = 'User';
    
    class Users extends Collection {
      constructor(apiEndpoint) {
        $injector.invoke(super.constructor, this, {collectionOf, apiRoute, apiEndpoint});
      }
    }

    return Users;
  }
}

UsersFactory.$inject = ['$injector'];

export default UsersFactory;