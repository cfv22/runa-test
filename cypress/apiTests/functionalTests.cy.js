import weatherService from '../SOM/currentService.som';

describe('Weather API Test Cases', () => {
  beforeEach(function () {
    cy.fixture('weatherData').then((data) => {
        this.weatherData = JSON.parse(JSON.stringify(data).replace(/<<API_KEY>>/g, Cypress.env('api_key')));
    });
});


    context('Given valid lat, lon, and appid', () => {
        it('when I send a get request, then I should get a 200 OK status with valid JSON response', function () {
            weatherService.getWeather(this.weatherData.validRequest).then((response) => {
                expect(response.status).to.eq(200);
            });
        });
    });

    context('Given an invalid appid', () => {
        it('when I send a request, then I should get a 401 Unauthorized error', function () {
            weatherService.getWeather(this.weatherData.invalidAppIdRequest).then((response) => {
                expect(response.status).to.eq(401);
                expect(response.body.message).to.include('Invalid API key');
            });
        });
    });

    context('Given the appid is missing', () => {
        it('when I send a request, then I should get a 401 Unauthorized error', function () {
            weatherService.getWeather(this.weatherData.missingAppIdRequest).then((response) => {
                expect(response.status).to.eq(401);
                expect(response.body.message).to.include('Invalid API key');
            });
        });
    });

    context('Given a missing lat or lon and no q was specified', () => {
        it('when I send a request, then I should get a 400 Bad Request error', function () {
            weatherService.getWeather(this.weatherData.missingLatLonRequest).then((response) => {
                expect(response.status).to.eq(400);
                expect(response.body.message).to.include('Nothing to geocode');
            });
        });
    });

    context('Given I only specify the city in q with no lat and lon', () => {
        it('when I request weather data then I get valid weather response', function () {
            weatherService.getWeather(this.weatherData.cityRequest).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.have.property('weather');
                expect(response.body.name).to.eq('Bogota');
            });
        });
    });
});
