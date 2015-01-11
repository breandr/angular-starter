//import angular from 'angular';
import 'components/csnet/api/api';
import 'components/csnet/users/users-module';
import 'components/csnet/organisation/organisation-module';
import 'components/csnet/site/site-module';
import 'components/csnet/securityGroup/securityGroup-module';
import 'components/csnet/activities/activities-module';
import 'components/csnet/appointments/appointments-module';
import 'components/csnet/sessions/sessions-module';
import 'components/csnet/activityTypes/activityTypes-module';
import 'components/csnet/sites/sites-module';
import 'components/csnet/teams/teams-module';
import 'components/csnet/activityAlerts/activityAlerts-module';
import 'components/csnet/activityClients/activityClients-module';
import 'components/csnet/activityNotes/activityNotes-module';
import 'components/csnet/activityStatuses/activityStatuses-module';
import 'components/csnet/activityUploads/activityUploads-module';
import 'components/csnet/audits/audits-module';
import 'components/csnet/briefContacts/briefContacts-module';
import 'components/csnet/clientBankAccountAudits/clientBankAccountAudits-module';
import 'components/csnet/clientWarnings/clientWarnings-module';
import 'components/csnet/documents/documents-module';
import 'components/csnet/events/events-module';
import 'components/csnet/eventWorkers/eventWorkers-module';
import 'components/csnet/fBAssessments/fBAssessments-module';
import 'components/csnet/fBResponses/fBResponses-module';
import 'components/csnet/importFiles/importFiles-module';
import 'components/csnet/paymentBatches/paymentBatches-module';
import 'components/csnet/paymentRecoveries/paymentRecoveries-module';
import 'components/csnet/paymentRecoveryAudits/paymentRecoveryAudits-module';
import 'components/csnet/payments/payments-module';
import 'components/csnet/paymentSchedules/paymentSchedules-module';
import 'components/csnet/planActionNotes/planActionNotes-module';
import 'components/csnet/planActions/planActions-module';
import 'components/csnet/processTaskTemplates/processTaskTemplates-module';
import 'components/csnet/rosters/rosters-module';
import 'components/csnet/sharedActivities/sharedActivities-module';
import 'components/csnet/uDFValuesUsers/uDFValuesUsers-module';
import 'components/csnet/userNotifications/userNotifications-module';
import 'components/csnet/userPasswordAudits/userPasswordAudits-module';
import UserFactory from './User-factory';

let userModule = null;

try {
  angular.module('csnet.user');
} catch (e) {
  userModule = angular.module('csnet.user', [
  'csnet.api',
    'csnet.users',
    'csnet.organisation',
    'csnet.site',
    'csnet.securityGroup',
    'csnet.activities',
    'csnet.appointments',
    'csnet.sessions',
    'csnet.activityTypes',
    'csnet.sites',
    'csnet.teams',
    'csnet.activityAlerts',
    'csnet.activityClients',
    'csnet.activityNotes',
    'csnet.activityStatuses',
    'csnet.activityUploads',
    'csnet.audits',
    'csnet.briefContacts',
    'csnet.clientBankAccountAudits',
    'csnet.clientWarnings',
    'csnet.documents',
    'csnet.events',
    'csnet.eventWorkers',
    'csnet.fBAssessments',
    'csnet.fBResponses',
    'csnet.importFiles',
    'csnet.paymentBatches',
    'csnet.paymentRecoveries',
    'csnet.paymentRecoveryAudits',
    'csnet.payments',
    'csnet.paymentSchedules',
    'csnet.planActionNotes',
    'csnet.planActions',
    'csnet.processTaskTemplates',
    'csnet.rosters',
    'csnet.sharedActivities',
    'csnet.uDFValuesUsers',
    'csnet.userNotifications',
    'csnet.userPasswordAudits'
  ]).factory('User', UserFactory);
}

export default userModule;