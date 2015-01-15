import Model from 'components/common/Model';

class UserFactory {
  constructor($injector, __APP_NAME_PASCAL_CASED__Api, Users) {
    let apiEndpoint = __APP_NAME_PASCAL_CASED__Api.one('users');
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

UserFactory.$inject = ['$injector', '__APP_NAME_PASCAL_CASED__Api', 'Users'];

export default UserFactory;