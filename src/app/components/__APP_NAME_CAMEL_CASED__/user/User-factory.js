import Model from 'components/common/Model';

class UserFactory {
  constructor($resource, $injector, Users) {
    let {apiRoute, key} = UserFactory;
    let collectionType = Users;
    
    class User extends Model {
      constructor(data = null, parentResourceUrl) {
        $injector.invoke(super.constructor, this, {data, key, apiRoute, parentResourceUrl, collectionType});
      }
    }

    return User;
  }
}

UserFactory.apiRoute = 'users';
UserFactory.key = 'id';
UserFactory.$inject = ['$resource', '$injector', 'Users'];

export default UserFactory;