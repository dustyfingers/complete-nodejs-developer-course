const request = require('request');
const url = 'https://api.darksky.net/forecast/0476687bab36c26bad5401f69e6879bc/37.8267,-122.4233';

request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body);
    console.log(data.currently);
});