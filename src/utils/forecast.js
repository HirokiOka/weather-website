const request = require('request');

const forecast = (latitude, longtitude, callback) => {
    const url = 'https://api.darksky.net/forecast/c3760dc985577f65f533cc410b15d91c/' + latitude + ',' + longtitude;
    
    request({ url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service', undefined);
        } else if (body.error) {
            callback('Unable to find location', undefined);
        } else {
            callback(undefined, `${body.daily.data[0].summary} It is currently ${body.currently.temperature} degrees out. This high today is ${body.daily.data[0].temperatureHigh} with a low of ${body.daily.data[0].temperatureLow}. There is a ${body.currently.precipProbability}% chance of rain.`);
        }
    });
};

module.exports = forecast;