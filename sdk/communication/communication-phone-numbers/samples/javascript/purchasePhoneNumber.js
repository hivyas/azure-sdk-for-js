// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * Demonstrates how to us the PhoneNumbersClient
 * to purchase a phone number.
 */

const { PhoneNumbersClient } = require("@azure/communication-phone-numbers");

// Load the .env file if it exists
const dotenv = require("dotenv");
dotenv.config();

// You will need to set this environment variables or edit the following values
const connectionString =
  process.env["COMMUNICATION_CONNECTION_STRING"] || "<communication service connection string>";

async function main() {
  console.log("\n== Purchase Phone Number Javascript Sample ==\n");

  // create new client
  const client = new PhoneNumbersClient(connectionString);

  return client;
}

main().catch((error) => {
  console.error("Encountered an error while purchasing phone number: ");
  console.error("Request: \n", error.request);
  console.error("\nResponse: \n", error.response);
  console.error(error);
});
