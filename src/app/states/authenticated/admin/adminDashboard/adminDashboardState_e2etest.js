'use strict';

var configDashboardPageObject = require('./configDashboardState_pageObject.js');

describe('state: configDashboard', function () {
  beforeEach(function () {
    configDashboardPageObject.navigateHere();
  });

  it('has a #configDashboardState element', function () {
    expect(configDashboardPageObject.stateContainer).to.eventually.have.length(1);
  });
});