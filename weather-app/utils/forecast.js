const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=87a204bc8fb82ee3e2a4bce7e7cdf838&query=' + latitude + ',' + longitude + '&units=f'
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('there is an error')
        } else if (response.body.error) {
            callback('beeboop beeboop')
        } else {
            callback(undefined, response.body.current.weather_descriptions[0])
            
        }
    })
    }


module.exports = forecast