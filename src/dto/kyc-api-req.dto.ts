'use strict';
/**
 * Third party api request dto
 */

import {StateOfIssue} from '../enum/state-of-issue.enum';

export class KYCAPIRequest {
  birthDate: Date;

  givenName: string;

  middleName?: string;

  familyName: string;

  licenceNumber: string;

  expiryDate: string;

  stateOfIssue: StateOfIssue;
}
