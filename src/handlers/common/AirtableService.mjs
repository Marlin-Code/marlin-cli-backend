import Airtable from "airtable";
import { getSecret } from "./SecretManager.mjs";
import { AIRTABLE_BASE } from "../constants.mjs";

const airtableSecret = await getSecret("AIRTABLE_API_KEY");
const nameField = "Name";
Airtable.configure({
  apiKey: airtableSecret
})
const base = Airtable.base(AIRTABLE_BASE);

export function getRecordByName(table, name) {
  return new Promise((resolve, reject) => {
    const query = base(table).select({
      filterByFormula: `${nameField} = "${name}"`
    })
    query.firstPage(function(err, records) {
      if (err) {
        reject(err);
      }
      if (records.length === 0) {
        reject("Not Found");
      } else {
        resolve(records[0]['fields']);
      }
    });
  });
}

export function getAllRecordNames(table) {
  return new Promise((resolve, reject) => {
    base(table).select({
      fields: [nameField]
    }).firstPage(function(err, records) {
      if (err) {
        reject(err);
      }
      resolve(records.map(record => record['fields'][nameField]));
    });
  });
}