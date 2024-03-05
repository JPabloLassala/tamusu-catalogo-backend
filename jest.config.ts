/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from "jest";

const config: Config = {
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  // The glob patterns Jest uses to detect test files
  testMatch: ["/**/?(*.)+(spec|test).ts"],
  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  testPathIgnorePatterns: ["/node_modules/"],
  collectCoverageFrom: ["src/**/*Handler.ts"],
};

export default config;
