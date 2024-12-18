class WeatherService {
    getWeather(params) {
        return cy.request({
            method: 'GET',
            url: '/weather', 
            qs: params, 
            failOnStatusCode: false,
        });
    }
}

export default new WeatherService();
