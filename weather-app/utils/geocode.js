const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiY2FwZWxsYW5kaWFuYSIsImEiOiJjbGUydnVlaG4wMnh5M3FtbWJsY3phNHg5In0.ErJrLj3GHYt1GyuntphXyg'
    
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('unable to connect to location')
        } else if (response.body.features.lenght === 0 ) {
            callback('unable to find location try another search')
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })
    }

    module.exports = geocode