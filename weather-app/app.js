//THIS IS AN EXAMPLE OF HOW ASYCRONOUS WORKS
// console.log('starting')
// //set timeout lets us run some code after a specifi amount of time has passed it is a function.
// setTimeout(() => {
// console.log('timer')
// }, 2000)

// setTimeout(() => {
//     console.log('0seconds')
// }, 0)
// console.log('stopping')

//MAKING HTTP REQUEST BELOW!
// const { encode } = require('punycode')
const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const { SocketAddress } = require('net')

const address = process.argv[2]
//console log error not working its giving me the long error. i forgot to add this^^^
if (!address) {
    console.log('please enter address please')
} else {
    //this is callback chaining
geocode(address, (error, data) => {
    if(error) {
        return console.log(error)
    }
    // console.log('erroer', error)
    // console.log('data', data)
    forecast(data.latitude, data.longitude, (error, forecastData) => {
        if(error) {
            return console.log(error)
        }
        console.log(data.location)
        console.log(forecastData)
        // console.log('Error', error)
        // console.log('Data', data)
      })
})
}
console.log(process.argv)

const url = 'http://api.weatherstack.com/current?access_key=87a204bc8fb82ee3e2a4bce7e7cdf838&query=37.8267,-122.4233&units=f'

request({ url: url, json: true }, (error, response) => {
    // const data = JSON.parse(response.body)
    // console.log(data.current)
    // console.log(response.body.current)
    if (error) {
        console.log('unable to connect to weather app')
    } else if (response.body.error) {
console.log('unable to find location')
    } else {
        console.log(response.body.current.weather_descriptions[0] + ' it is ' + response.body.current.temperature + ' degrees outside, and it feels like ' + response.body.current.feelslike + ' degrees')
    }
})
// challenge 1 print "it is currently11degrees. it feels like 10degrees." ^^^
// learning how to use Geocoding we will convert address to lat/lang to get the weather
// challenge new request, parse in JSON print lat/long to terminal

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiY2FwZWxsYW5kaWFuYSIsImEiOiJjbGUydnVlaG4wMnh5M3FtbWJsY3phNHg5In0.ErJrLj3GHYt1GyuntphXyg'
// if else statement for error handling. very cool.
request({ url: geocodeURL, json: true }, (error, response) => {
    if (error) {
        console.log('unable to connect to location services')
    } else if (response.body.features.length === 0) {
        console.log('no location found')
    } else {
        const latitude = response.body.features[0].center[1]
        const longitude = response.body.features[0].center[0]
        console.log(latitude, longitude)
    }
})



//i am doing something wrong because it is not printing the cordinates for charlote but for los angeles. nevermind it does work.

// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)
// his cordinates where backwards!! very fustrating until i fugured it out jajaja
