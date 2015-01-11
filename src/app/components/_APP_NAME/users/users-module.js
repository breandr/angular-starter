//import angular from 'angular';
import 'components/csnet/api/api';
import 'components/csnet/user/user-module';
import UsersFactory from './Users-factory';

try {
  angular.module('csnet.users');
} catch (e) {
  angular.module('csnet.users', [
    'csnet.api',
    'csnet.user'
  ]).factory('Users', UsersFactory);
}