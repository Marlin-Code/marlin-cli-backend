import Airtable from "airtable";
import {
  SecretsManagerClient,
  GetSecretValueCommand,
} from "@aws-sdk/client-secrets-manager";
import { AIRTABLE_BASE } from "../constants.mjs";

const secret_name = "AIRTABLE_API_KEY";

const client = new SecretsManagerClient({
  region: "us-east-1",
});

let response;

try {
  response = await client.send(
    new GetSecretValueCommand({
      SecretId: secret_name
    })
  );
} catch (error) {
  throw error;
}

const airtableSecret = response.SecretString;

Airtable.configure({
  apiKey: airtableSecret
})
const base = Airtable.base(AIRTABLE_BASE);
const nameField = "Name";

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