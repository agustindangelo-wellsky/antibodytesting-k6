import { sleep, group } from "k6";
import http from "k6/http";
import { checkStatus } from "./utils.js";
import { randomIntBetween } from "https://jslib.k6.io/k6-utils/1.1.0/index.js";

export function login() {
  let response;

  const issuer =
    "https://wellsky-ciam.oktapreview.com/oauth2/aussyy6p7tqLFjziZ1d6/v1/token";
  const scopes = "api.wellsky.blood.antibodytesting";
  const grantType = "client_credentials";

  group("login", function () {
    response = http.post(
      issuer,
      {
        grant_type: grantType,
        scope: scopes,
        client_id: "0oa28oqw7qyaBWiST1d7",
        client_secret: "6JPUWPCfbM1t16QyO4BfDfnHKoJcA9b_mpwlt7w8",
      },
      {
        headers: {
          accept: "application/json",
          "cache-control": "no-cache",
          "content-type": "application/x-www-form-urlencoded",
        },
      }
    );

    const jsonResponse = response.json();
    const tokenType = jsonResponse.token_type;
    const token = jsonResponse.access_token;
    console.debug(tokenType, token);

    checkStatus({
      response: response,
      expectedStatus: 200,
      failOnError: true,
      printOnError: true,
    });

    // sleep(randomIntBetween(pauseMin, pauseMax));

    return token;
  });
}
