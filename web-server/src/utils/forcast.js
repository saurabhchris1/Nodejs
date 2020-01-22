 const request = require('request')

 const forcast = (lat, long, callback) => {
    const url = 'https://api.darksky.net/forecast/c6fc2eac3ea5647627be1ffec472eb2f/' + lat + ',' + long + '?units=si'
     request({url: url, json: true}, (error, response) => {
         if (error){
             callback("No Internet Connection", undefined)
         } else if (response.body.error){
             callback("Unable to find Location", undefined)
         } else{
             callback(undefined, response.body.daily.data[0].summary + " It is currently " + response.body.currently.temperature
                 + " degrees out." + " There is " + (response.body.currently.precipProbability * 100) + " % " + "chance of rain")
         }
     })

 }

 module.exports = forcast