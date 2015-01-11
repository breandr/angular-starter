'use strict';

var myNotificationsListPageObject = require('./myNotificationsListState_pageObject.js');

describe('state: myNotificationsList', function () {
  beforeEach(function () {
    myNotificationsListPageObject.navigateHere();
  });

  it('has a #myNotificationsListState element', function () {
    expect(myNotificationsListPageObject.stateContainer).to.eventually.have.length(1);
  });
});