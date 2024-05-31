import { LightningElement, wire, api } from "lwc";
import { getRecord, getFieldValue } from "lightning/uiRecordApi";

import NAME_FIELD from "@salesforce/schema/Account.Name";
import PHONE_FIELD from "@salesforce/schema/Account.Phone";
const fields = [NAME_FIELD, PHONE_FIELD];

export default class TestLWC extends LightningElement {
  @api recordId;

  @wire(getRecord, { recordId: "$recordId", fields })
  account;

  get name() {
    return getFieldValue(this.account.data, NAME_FIELD);
  }
  get phone() {
    return getFieldValue(this.account.data, PHONE_FIELD);
  }
}
