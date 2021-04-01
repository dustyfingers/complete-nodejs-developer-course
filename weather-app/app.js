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