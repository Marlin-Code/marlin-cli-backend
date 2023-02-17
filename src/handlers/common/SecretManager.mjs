import {
  SecretsManagerClient,
  GetSecretValueCommand,
} from "@aws-sdk/client-secrets-manager";

export async function getSecret(secretName) {
  const client = new SecretsManagerClient({
    region: "us-east-1",
  });
  let secretRequest = new GetSecretValueCommand({
    SecretId: secretName})
  try {
    let response = await client.send(secretRequest)
    return response.SecretString
  } catch(err) {
    console.log(err)
    throw err
  }
}