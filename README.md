
# Weather API Cypress Test Suite

## Setup Instructions

### 1. Install Dependencies

Make sure to have node installed, then run the following command to install the required dependencies:

```
npm install
```
### 2. Set Up the API Key

Create a `.env` file in the root of the project and add openweather API key from https://home.openweathermap.org/api_keys like this: 

`API_KEY=apikeyfromopenweather` 

### 3. Start Cypress

Open the Cypress Test Runner:

```
npx cypress open
```

Or run the tests headlessly:

```
npx cypress run
```