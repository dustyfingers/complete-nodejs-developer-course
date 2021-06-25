<<<<<<< HEAD
const request = require("postman-request");

const weatherstackUrl = "http://api.weatherstack.com/current?access_key=e0189954bb9cf553030f50eb483a321e&query=Colorado Springs&units=f";
const mapboxUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZHVzdHlmaW5nZXJzIiwiYSI6ImNqeGptMmY1ZzFubnUzdGxpc3IxZGMwNGYifQ.Em8_6UrdB3FD-54wsRYvwg&limit=1"

request({ url: weatherstackUrl, json: true }, (err, res) => {
    const {current} = res.body;
    console.log(`The current weather is:  ${current.weather_descriptions[0]}`);
    console.log(`It is ${current.temperature}F outside. It feels like it is ${current.feelslike}F outside. There is a ${current.precip}% chance of precipitation right now.`);
});

request({ url: mapboxUrl, json: true }, (err, res) => {
    console.log(res.body);
    console.log(res.body.features[0].place_name);
    console.log(res.body.features[0].center);

    // lat
    console.log(res.body.features[0].center[1]);
    // long
    console.log(res.body.features[0].center[0]);
});
=======
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


>>>>>>> f5f23aa2e8d242b5d42994fb72335dcbfdc27d0b
