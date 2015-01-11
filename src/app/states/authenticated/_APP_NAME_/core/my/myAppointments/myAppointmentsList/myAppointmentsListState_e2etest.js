'use strict';

var myAppointmentsListPageObject = require('./myAppointmentsListState_pageObject.js');

describe('state: myAppointmentsList', function () {
  beforeEach(function () {
    myAppointmentsListPageObject.navigateHere();
  });

  it('has a #myAppointmentsListState element', function () {
    expect(myAppointmentsListPageObject.stateContainer).to.eventually.have.length(1);
  });
});