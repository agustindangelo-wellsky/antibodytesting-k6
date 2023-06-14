import { utils } from "./utils.js";
import { login } from "./login.js";

export const options = {
  vus: 1,
  // duration: "30s"
};

// used to store global variables
globalThis.vars = [];

// global min/max sleep durations (in seconds):
globalThis.pauseMin = 5;
globalThis.pauseMax = 15;

export default function main() {
  const bearerToken = login();
  searchForWorksheets(bearerToken);
}
