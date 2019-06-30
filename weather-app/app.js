const request = require('request');
const url = 'https://api.darksky.net/forecast/0476687bab36c26bad5401f69e6879bc/37.8267,-122.4233';

request({ url: url, json: true }, (error, response) => {
    // 
    // Print a forcast to the user
    // 'It is currently 58.55 degrees out. There is a 0% chance of rain.'
    // 
    let currentTemp, currentPrecipProb;
    currentTemp = response.body.currently.temperature;
    currentPrecipProb = response.body.currently.precipProbability;
    console.log(`It is currently ${currentTemp} degrees F out. There is a ${currentPrecipProb}% chance of rain.`);
});


