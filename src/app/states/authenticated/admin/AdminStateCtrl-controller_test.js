'use strict';

/*var assert = chai.assert,
  expect = chai.expect,
  should = chai.should();*/

describe('ConfigStateCtrl', function () {
  var scope, ctrl;

  beforeEach(angular.mock.module('myApp.states.authenticated.__APP_NAME_CAMEL_CASED__.config'));
  beforeEach(angular.mock.inject(function ($rootScope, $controller) {
    scope = $rootScope.$new();
    ctrl = $controller('ConfigStateCtrl', {
      $scope: scope
    });
  }));

  it('exists', function () {
    expect(ctrl).to.not.be.undefined;
  });
});