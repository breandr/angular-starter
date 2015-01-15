'use strict';

/*var assert = chai.assert,
  expect = chai.expect,
  should = chai.should();*/

describe('AuthenticatedStateCtrl', function () {
  var scope, ctrl;

  beforeEach(angular.mock.module('__APP_NAME_CAMEL_CASED__.states.authenticated'));
  beforeEach(angular.mock.inject(function ($rootScope, $controller) {
    scope = $rootScope.$new();
    ctrl = $controller('AuthenticatedStateCtrl', {
      $scope: scope
    });
  }));

  it('exists', function () {
    expect(ctrl).to.not.be.undefined;
  });
});