'use strict';

var myPreferencesPageObject = require('./myPreferencesState_pageObject.js');

describe('state: myPreferences', function () {
  beforeEach(function () {
    myPreferencesPageObject.navigateHere();
  });

  it('has a #myPreferencesState element', function () {
    expect(myPreferencesPageObject.stateContainer).to.eventually.have.length(1);
  });
});