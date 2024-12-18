const { defineConfig } = require("cypress");
require('dotenv').config();

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
     
      // implement node event listeners here
    },
     specPattern: 'cypress/apiTests/**/*.cy.js',
     baseUrl: 'https://api.openweathermap.org/data/2.5',
     env: {
      api_key: process.env.API_KEY,
  },
  },
});
