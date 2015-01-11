class UsersCtrl{
  constructor(User, Users) {
    this.user = new User();
    this.users = new Users();
  }
}

UsersCtrl.$inject = ['User', 'Users'];

export default UsersCtrl;