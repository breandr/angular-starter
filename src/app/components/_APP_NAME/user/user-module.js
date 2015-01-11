//import angular from 'angular';
import 'components/__APP_NAME_CAMEL_CASED__/api/api';
import 'components/__APP_NAME_CAMEL_CASED__/users/users-module';
import 'components/__APP_NAME_CAMEL_CASED__/organisation/organisation-module';
import 'components/__APP_NAME_CAMEL_CASED__/site/site-module';
import 'components/__APP_NAME_CAMEL_CASED__/securityGroup/securityGroup-module';
import 'components/__APP_NAME_CAMEL_CASED__/activities/activities-module';
import 'components/__APP_NAME_CAMEL_CASED__/appointments/appointments-module';
import 'components/__APP_NAME_CAMEL_CASED__/sessions/sessions-module';
import 'components/__APP_NAME_CAMEL_CASED__/activityTypes/activityTypes-module';
import 'components/__APP_NAME_CAMEL_CASED__/sites/sites-module';
import 'components/__APP_NAME_CAMEL_CASED__/teams/teams-module';
import 'components/__APP_NAME_CAMEL_CASED__/activityAlerts/activityAlerts-module';
import 'components/__APP_NAME_CAMEL_CASED__/activityClients/activityClients-module';
import 'components/__APP_NAME_CAMEL_CASED__/activityNotes/activityNotes-module';
import 'components/__APP_NAME_CAMEL_CASED__/activityStatuses/activityStatuses-module';
import 'components/__APP_NAME_CAMEL_CASED__/activityUploads/activityUploads-module';
import 'components/__APP_NAME_CAMEL_CASED__/audits/audits-module';
import 'components/__APP_NAME_CAMEL_CASED__/briefContacts/briefContacts-module';
import 'components/__APP_NAME_CAMEL_CASED__/clientBankAccountAudits/clientBankAccountAudits-module';
import 'components/__APP_NAME_CAMEL_CASED__/clientWarnings/clientWarnings-module';
import 'components/__APP_NAME_CAMEL_CASED__/documents/documents-module';
import 'components/__APP_NAME_CAMEL_CASED__/events/events-module';
import 'components/__APP_NAME_CAMEL_CASED__/eventWorkers/eventWorkers-module';
import 'components/__APP_NAME_CAMEL_CASED__/fBAssessments/fBAssessments-module';
import 'components/__APP_NAME_CAMEL_CASED__/fBResponses/fBResponses-module';
import 'components/__APP_NAME_CAMEL_CASED__/importFiles/importFiles-module';
import 'components/__APP_NAME_CAMEL_CASED__/paymentBatches/paymentBatches-module';
import 'components/__APP_NAME_CAMEL_CASED__/paymentRecoveries/paymentRecoveries-module';
import 'components/__APP_NAME_CAMEL_CASED__/paymentRecoveryAudits/paymentRecoveryAudits-module';
import 'components/__APP_NAME_CAMEL_CASED__/payments/payments-module';
import 'components/__APP_NAME_CAMEL_CASED__/paymentSchedules/paymentSchedules-module';
import 'components/__APP_NAME_CAMEL_CASED__/planActionNotes/planActionNotes-module';
import 'components/__APP_NAME_CAMEL_CASED__/planActions/planActions-module';
import 'components/__APP_NAME_CAMEL_CASED__/processTaskTemplates/processTaskTemplates-module';
import 'components/__APP_NAME_CAMEL_CASED__/rosters/rosters-module';
import 'components/__APP_NAME_CAMEL_CASED__/sharedActivities/sharedActivities-module';
import 'components/__APP_NAME_CAMEL_CASED__/uDFValuesUsers/uDFValuesUsers-module';
import 'components/__APP_NAME_CAMEL_CASED__/userNotifications/userNotifications-module';
import 'components/__APP_NAME_CAMEL_CASED__/userPasswordAudits/userPasswordAudits-module';
import UserFactory from './User-factory';

let userModule = null;

try {
  angular.module('__APP_NAME_CAMEL_CASED__.user');
} catch (e) {
  userModule = angular.module('__APP_NAME_CAMEL_CASED__.user', [
  '__APP_NAME_CAMEL_CASED__.api',
    '__APP_NAME_CAMEL_CASED__.users',
    '__APP_NAME_CAMEL_CASED__.organisation',
    '__APP_NAME_CAMEL_CASED__.site',
    '__APP_NAME_CAMEL_CASED__.securityGroup',
    '__APP_NAME_CAMEL_CASED__.activities',
    '__APP_NAME_CAMEL_CASED__.appointments',
    '__APP_NAME_CAMEL_CASED__.sessions',
    '__APP_NAME_CAMEL_CASED__.activityTypes',
    '__APP_NAME_CAMEL_CASED__.sites',
    '__APP_NAME_CAMEL_CASED__.teams',
    '__APP_NAME_CAMEL_CASED__.activityAlerts',
    '__APP_NAME_CAMEL_CASED__.activityClients',
    '__APP_NAME_CAMEL_CASED__.activityNotes',
    '__APP_NAME_CAMEL_CASED__.activityStatuses',
    '__APP_NAME_CAMEL_CASED__.activityUploads',
    '__APP_NAME_CAMEL_CASED__.audits',
    '__APP_NAME_CAMEL_CASED__.briefContacts',
    '__APP_NAME_CAMEL_CASED__.clientBankAccountAudits',
    '__APP_NAME_CAMEL_CASED__.clientWarnings',
    '__APP_NAME_CAMEL_CASED__.documents',
    '__APP_NAME_CAMEL_CASED__.events',
    '__APP_NAME_CAMEL_CASED__.eventWorkers',
    '__APP_NAME_CAMEL_CASED__.fBAssessments',
    '__APP_NAME_CAMEL_CASED__.fBResponses',
    '__APP_NAME_CAMEL_CASED__.importFiles',
    '__APP_NAME_CAMEL_CASED__.paymentBatches',
    '__APP_NAME_CAMEL_CASED__.paymentRecoveries',
    '__APP_NAME_CAMEL_CASED__.paymentRecoveryAudits',
    '__APP_NAME_CAMEL_CASED__.payments',
    '__APP_NAME_CAMEL_CASED__.paymentSchedules',
    '__APP_NAME_CAMEL_CASED__.planActionNotes',
    '__APP_NAME_CAMEL_CASED__.planActions',
    '__APP_NAME_CAMEL_CASED__.processTaskTemplates',
    '__APP_NAME_CAMEL_CASED__.rosters',
    '__APP_NAME_CAMEL_CASED__.sharedActivities',
    '__APP_NAME_CAMEL_CASED__.uDFValuesUsers',
    '__APP_NAME_CAMEL_CASED__.userNotifications',
    '__APP_NAME_CAMEL_CASED__.userPasswordAudits'
  ]).factory('User', UserFactory);
}

export default userModule;