import Collection from 'components/common/Collection';

class UsersFactory {
  constructor($injector) {
    let modelName = 'User';
    
    class Users extends Collection {
      constructor(parentResourceApiRoute) {
        $injector.invoke(super.constructor, this, {modelName, parentResourceApiRoute});
      }
    }

    return Users;
  }
}

UsersFactory.$inject = ['$injector'];

export default UsersFactory;