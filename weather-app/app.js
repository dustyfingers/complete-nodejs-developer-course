const request = require('request');
const url = 'https://api.darksky.net/forecast/0476687bab36c26bad5401f69e6879bc/37.8267,-122.4233';

request({ url: url, json: true }, (error, response) => {
    let currentTemp, currentPrecipProb, dailyHigh, dailyLow;
    currentTemp = response.body.currently.temperature;
    currentPrecipProb = response.body.currently.precipProbability;
    dailyHigh = response.body.daily.data[0].temperatureMax;
    dailyLow = response.body.daily.data[0].temperatureMin;
    console.log(`It is currently ${currentTemp} degrees F out in Los Angeles, CA. There is a ${currentPrecipProb}% chance of rain.\n`);
    console.log(`The high for today is ${dailyHigh} and the low is ${dailyLow}.\n`);
});


