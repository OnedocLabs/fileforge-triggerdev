import "dotenv/config";
import type { TriggerConfig } from "@trigger.dev/sdk/v3";

if (!process.env.TRIGGER_PROJECT_ID) {
  throw new Error("TRIGGER_PROJECT_ID is not set");
}

export const config: TriggerConfig = {
  project: process.env.TRIGGER_PROJECT_ID as string,
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
