import Model from 'components/common/Model';

class UserFactory {
  constructor($injector, CsnetApi, Users, Organisation, Site, SecurityGroup, Activities, Appointments, Sessions, ActivityTypes, Sites, Teams, ActivityAlerts, ActivityClients, ActivityNotes, ActivityStatuses, ActivityUploads, Audits, BriefContacts, ClientBankAccountAudits, ClientWarnings, Documents, Events, EventWorkers, FBAssessments, FBResponses, ImportFiles, PaymentBatches, PaymentRecoveries, PaymentRecoveryAudits, Payments, PaymentSchedules, PlanActionNotes, PlanActions, ProcessTaskTemplates, Rosters, SharedActivities, UDFValuesUsers, UserNotifications, UserPasswordAudits) {
    let apiEndpoint = CsnetApi.one('users');
    let key = 'id';
    let collectionType = Users;
    
    class User extends Model {
      constructor(data = null) {
        $injector.invoke(super.constructor, this, {data, key, apiEndpoint, collectionType});
      }
      
      // References
      setReferences(){
        this.setReferenceToOrganisation();
        this.setReferenceToPrimarySite();
        this.setReferenceToSecurityGroup();
        this.setReferenceToActivities();
        this.setReferenceToAppointments();
        this.setReferenceToSessions();
        this.setReferenceToActivityTypes();
        this.setReferenceToSites();
        this.setReferenceToTeams();
        this.setReferenceToActivityAlerts();
        this.setReferenceToActivityClients();
        this.setReferenceToActivityNotes();
        this.setReferenceToActivityStatuses();
        this.setReferenceToActivityUploads();
        this.setReferenceToAudits();
        this.setReferenceToBriefContacts();
        this.setReferenceToClientBankAccountAudits();
        this.setReferenceToClientWarnings();
        this.setReferenceToDocuments();
        this.setReferenceToEvents();
        this.setReferenceToEventWorkers();
        this.setReferenceToFBAssessments();
        this.setReferenceToFBResponses();
        this.setReferenceToImportFiles();
        this.setReferenceToPaymentBatches();
        this.setReferenceToPaymentRecoveries();
        this.setReferenceToPaymentRecoveryAudits();
        this.setReferenceToPayments();
        this.setReferenceToPaymentSchedules();
        this.setReferenceToPlanActionNotes();
        this.setReferenceToPlanActions();
        this.setReferenceToProcessTaskTemplates();
        this.setReferenceToRosters();
        this.setReferenceToSharedActivities();
        this.setReferenceToUDFValuesUsers();
        this.setReferenceToUserNotifications();
        this.setReferenceToUserPasswordAudits();
      }
      
      getOptions(){
        this.organisation.getSelectOptions();
        this.primarySite.getSelectOptions();
        this.securityGroup.getSelectOptions();
      }
          
      // Organisation
      setReferenceToOrganisation(organisationId = this.data.organisationId) {
        this.data.organisationId = organisationId;
        this.organisation = new Organisation(this.data.organisationId);
      }
          
      // Primary Site
      setReferenceToPrimarySite(primarySiteId = this.data.primarySiteId) {
        this.data.primarySiteId = primarySiteId;
        this.primarySite = new Site(this.data.primarySiteId);
      }
          
      // Security Group
      setReferenceToSecurityGroup(securityGroupId = this.data.securityGroupId) {
        this.data.securityGroupId = securityGroupId;
        this.securityGroup = new SecurityGroup(this.data.securityGroupId);
      }
      // Activities
      setReferenceToActivities(apiEndpoint = this.apiEndpoint) {
        this.activities = new Activities(apiEndpoint);
      }
      
      // Appointments
      setReferenceToAppointments(apiEndpoint = this.apiEndpoint) {
        this.appointments = new Appointments(apiEndpoint);
      }
      
      // Sessions
      setReferenceToSessions(apiEndpoint = this.apiEndpoint) {
        this.sessions = new Sessions(apiEndpoint);
      }
      
      // Activity Types
      setReferenceToActivityTypes(apiEndpoint = this.apiEndpoint) {
        this.activityTypes = new ActivityTypes(apiEndpoint);
      }
      
      // Sites
      setReferenceToSites(apiEndpoint = this.apiEndpoint) {
        this.sites = new Sites(apiEndpoint);
      }
      
      // Teams
      setReferenceToTeams(apiEndpoint = this.apiEndpoint) {
        this.teams = new Teams(apiEndpoint);
      }
      
      // Activity Alerts
      setReferenceToActivityAlerts(apiEndpoint = this.apiEndpoint) {
        this.activityAlerts = new ActivityAlerts(apiEndpoint);
      }
      
      // Activity Clients
      setReferenceToActivityClients(apiEndpoint = this.apiEndpoint) {
        this.activityClients = new ActivityClients(apiEndpoint);
      }
      
      // Activity Notes
      setReferenceToActivityNotes(apiEndpoint = this.apiEndpoint) {
        this.activityNotes = new ActivityNotes(apiEndpoint);
      }
      
      // Activity Statuses
      setReferenceToActivityStatuses(apiEndpoint = this.apiEndpoint) {
        this.activityStatuses = new ActivityStatuses(apiEndpoint);
      }
      
      // Activity Uploads
      setReferenceToActivityUploads(apiEndpoint = this.apiEndpoint) {
        this.activityUploads = new ActivityUploads(apiEndpoint);
      }
      
      // Audits
      setReferenceToAudits(apiEndpoint = this.apiEndpoint) {
        this.audits = new Audits(apiEndpoint);
      }
      
      // Brief Contacts
      setReferenceToBriefContacts(apiEndpoint = this.apiEndpoint) {
        this.briefContacts = new BriefContacts(apiEndpoint);
      }
      
      // Client Bank Account Audits
      setReferenceToClientBankAccountAudits(apiEndpoint = this.apiEndpoint) {
        this.clientBankAccountAudits = new ClientBankAccountAudits(apiEndpoint);
      }
      
      // Client Warnings
      setReferenceToClientWarnings(apiEndpoint = this.apiEndpoint) {
        this.clientWarnings = new ClientWarnings(apiEndpoint);
      }
      
      // Documents
      setReferenceToDocuments(apiEndpoint = this.apiEndpoint) {
        this.documents = new Documents(apiEndpoint);
      }
      
      // Events
      setReferenceToEvents(apiEndpoint = this.apiEndpoint) {
        this.events = new Events(apiEndpoint);
      }
      
      // Event Workers
      setReferenceToEventWorkers(apiEndpoint = this.apiEndpoint) {
        this.eventWorkers = new EventWorkers(apiEndpoint);
      }
      
      // F Bassessments
      setReferenceToFBAssessments(apiEndpoint = this.apiEndpoint) {
        this.fBAssessments = new FBAssessments(apiEndpoint);
      }
      
      // F Bresponses
      setReferenceToFBResponses(apiEndpoint = this.apiEndpoint) {
        this.fBResponses = new FBResponses(apiEndpoint);
      }
      
      // Import Files
      setReferenceToImportFiles(apiEndpoint = this.apiEndpoint) {
        this.importFiles = new ImportFiles(apiEndpoint);
      }
      
      // Payment Batches
      setReferenceToPaymentBatches(apiEndpoint = this.apiEndpoint) {
        this.paymentBatches = new PaymentBatches(apiEndpoint);
      }
      
      // Payment Recoveries
      setReferenceToPaymentRecoveries(apiEndpoint = this.apiEndpoint) {
        this.paymentRecoveries = new PaymentRecoveries(apiEndpoint);
      }
      
      // Payment Recovery Audits
      setReferenceToPaymentRecoveryAudits(apiEndpoint = this.apiEndpoint) {
        this.paymentRecoveryAudits = new PaymentRecoveryAudits(apiEndpoint);
      }
      
      // Payments
      setReferenceToPayments(apiEndpoint = this.apiEndpoint) {
        this.payments = new Payments(apiEndpoint);
      }
      
      // Payment Schedules
      setReferenceToPaymentSchedules(apiEndpoint = this.apiEndpoint) {
        this.paymentSchedules = new PaymentSchedules(apiEndpoint);
      }
      
      // Plan Action Notes
      setReferenceToPlanActionNotes(apiEndpoint = this.apiEndpoint) {
        this.planActionNotes = new PlanActionNotes(apiEndpoint);
      }
      
      // Plan Actions
      setReferenceToPlanActions(apiEndpoint = this.apiEndpoint) {
        this.planActions = new PlanActions(apiEndpoint);
      }
      
      // Process Task Templates
      setReferenceToProcessTaskTemplates(apiEndpoint = this.apiEndpoint) {
        this.processTaskTemplates = new ProcessTaskTemplates(apiEndpoint);
      }
      
      // Rosters
      setReferenceToRosters(apiEndpoint = this.apiEndpoint) {
        this.rosters = new Rosters(apiEndpoint);
      }
      
      // Shared Activities
      setReferenceToSharedActivities(apiEndpoint = this.apiEndpoint) {
        this.sharedActivities = new SharedActivities(apiEndpoint);
      }
      
      // U Dfvalues Users
      setReferenceToUDFValuesUsers(apiEndpoint = this.apiEndpoint) {
        this.uDFValuesUsers = new UDFValuesUsers(apiEndpoint);
      }
      
      // User Notifications
      setReferenceToUserNotifications(apiEndpoint = this.apiEndpoint) {
        this.userNotifications = new UserNotifications(apiEndpoint);
      }
      
      // User Password Audits
      setReferenceToUserPasswordAudits(apiEndpoint = this.apiEndpoint) {
        this.userPasswordAudits = new UserPasswordAudits(apiEndpoint);
      }
      
    }

    return User;
  }
}

UserFactory.$inject = ['$injector', 'CsnetApi', 'Users', 'Organisation', 'Site', 'SecurityGroup', 'Activities', 'Appointments', 'Sessions', 'ActivityTypes', 'Sites', 'Teams', 'ActivityAlerts', 'ActivityClients', 'ActivityNotes', 'ActivityStatuses', 'ActivityUploads', 'Audits', 'BriefContacts', 'ClientBankAccountAudits', 'ClientWarnings', 'Documents', 'Events', 'EventWorkers', 'FBAssessments', 'FBResponses', 'ImportFiles', 'PaymentBatches', 'PaymentRecoveries', 'PaymentRecoveryAudits', 'Payments', 'PaymentSchedules', 'PlanActionNotes', 'PlanActions', 'ProcessTaskTemplates', 'Rosters', 'SharedActivities', 'UDFValuesUsers', 'UserNotifications', 'UserPasswordAudits'];

export default UserFactory;