import Model from 'components/common/Model';

class UserFactory {
  constructor($resource, $injector, Users) {
    let apiEndpoint = $resource('users');
    let key = 'id';
    let collectionType = Users;
    
    class User extends Model {
      constructor(data = null) {
        $injector.invoke(super.constructor, this, {data, key, apiEndpoint, collectionType});
      }
    }

    return User;
  }
}

UserFactory.$inject = ['$resource', '$injector', 'Users'];

export default UserFactory;