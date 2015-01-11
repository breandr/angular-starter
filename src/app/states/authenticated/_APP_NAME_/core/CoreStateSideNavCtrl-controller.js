class CoreStateSideNavCtrl {
  constructor(briefContactUpsertModal, activityUpsertModal /*, appointmentUpsertModal*/ ) {
    this.briefContactUpsertModal = briefContactUpsertModal;
    this.activityUpsertModal = activityUpsertModal;
    // this.appointmentUpsertModal = appointmentUpsertModal;
    this.isAdminNavCollapsed = true;
  }

  showBriefContactUpsertModal($event) {
    $event.preventDefault();
    $event.stopPropagation();
    this.briefContactUpsertModal.show($event);
  }

  showAppointmentUpsertModal($event) {
    $event.preventDefault();
    $event.stopPropagation();
    this.appointmentUpsertModal.show($event);
  }

  showActivityUpsertModal($event) {
    $event.preventDefault();
    $event.stopPropagation();
    this.activityUpsertModal.show($event);
  }
}

CoreStateSideNavCtrl.$inject = ['briefContactUpsertModal', 'activityUpsertModal'];

export default CoreStateSideNavCtrl;