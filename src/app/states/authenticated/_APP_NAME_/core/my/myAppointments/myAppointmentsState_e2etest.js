'use strict';

var myAppointmentsPageObject = require('./myAppointmentsState_pageObject.js');

describe('state: myAppointments', function () {
  beforeEach(function () {
    myAppointmentsPageObject.navigateHere();
  });

  it('has a #myAppointmentsState element', function () {
    expect(myAppointmentsPageObject.stateContainer).to.eventually.have.length(1);
  });
});