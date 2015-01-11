'use strict';

var myProfilePageObject = require('./myProfileState_pageObject.js');

describe('state: myProfile', function () {
  beforeEach(function () {
    myProfilePageObject.navigateHere();
  });

  it('has a #myProfileState element', function () {
    expect(myProfilePageObject.stateContainer).to.eventually.have.length(1);
  });
});