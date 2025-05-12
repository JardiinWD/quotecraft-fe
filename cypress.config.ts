import { defineConfig } from "cypress";

export default defineConfig({
  video: false,
  screenshotOnRunFailure: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    testIsolation: false,
    baseUrl: "http://localhost:4005",
    experimentalRunAllSpecs: true,
  },
  env: {
    CYPRESS_BASE_URL: 'http://localhost:4005',
  },
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  viewportWidth: 1440,
  viewportHeight: 1080,

});
