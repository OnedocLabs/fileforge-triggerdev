import "dotenv/config";
import type { TriggerConfig } from "@trigger.dev/sdk/v3";

const triggerProjectID = "proj_nbemyfywaqgifaqyqygz"; // Change this value to your project ID

if (triggerProjectID === "proj_nbemyfywaqgifaqyqygz") {
  throw new Error(
    "It seems that you are not using your own project ID. Please change the value of `triggerProjectID` to your project ID in `trigger.config.ts`."
  );
}

export const config: TriggerConfig = {
  project: triggerProjectID,
  logLevel: "log",
  retries: {
    enabledInDev: true,
    default: {
      maxAttempts: 3,
      minTimeoutInMs: 1000,
      maxTimeoutInMs: 10000,
      factor: 2,
      randomize: true,
    },
  },
};
