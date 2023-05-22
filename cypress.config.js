const { defineConfig } = require("cypress");

module.exports = defineConfig({
  testingType: "e2e",
  e2e: {
    baseUrl: "https://checkin-dev.netlify.app/",
    env: {
      url: "https://checkin-dev.netlify.app/login"
    },
    // other e2e specific configuration options
  },
  // other top-level configuration options
});

