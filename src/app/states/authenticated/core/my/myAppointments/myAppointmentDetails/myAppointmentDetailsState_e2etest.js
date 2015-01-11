'use strict';

var myAppointmentDetailsPageObject = require('./myAppointmentDetailsState_pageObject.js');

describe('state: myAppointmentDetails', function () {
  beforeEach(function () {
    myAppointmentDetailsPageObject.navigateHere();
  });

  it('has a #myAppointmentDetailsState element', function () {
    expect(myAppointmentDetailsPageObject.stateContainer).to.eventually.have.length(1);
  });
});