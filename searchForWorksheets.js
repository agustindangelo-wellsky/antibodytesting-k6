import { sleep, group } from "k6";
import { utils } from "./utils.js";
import http from "k6/http";
import { checkStatus } from "./utils.js";

export function searchForWorksheets() {
  let response;

  group("Search For Worksheets", function (bearerToken) {
    response = http.get(
      "https://bmtfnq22app01.wellsky.com/wst.antibodytesting/api/v1/sites/HMC/Worksheet/SearchForWorksheets?SortBy=worksheetDateTime&SortDirection=desc&PageIndex=0&PageSize=10",
      {
        headers: {
          accept: "application/json",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
          authorization: `Bearer ${bearerToken}`,
          "content-type": "application/json",
          origin: "https://bmtfnq22app01.wellsky.com",
          referer: "https://bmtfnq22app01.wellsky.com/",
          "sec-ch-ua":
            '"Not.A/Brand";v="8", "Chromium";v="114", "Microsoft Edge";v="114", "Microsoft Edge WebView2";v="114"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "cross-site",
          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36 Edg/114.0.1823.43",
          "x-okta-user-agent-extended": "okta-auth-js/5.11.0",
        },
      }
    );

    console.log(response.json());

    checkStatus({
      response: response,
      expectedStatus: 200,
      failOnError: true,
      printOnError: true,
    });
  });
}
