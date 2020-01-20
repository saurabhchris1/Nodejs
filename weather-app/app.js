const request = require("request")

const url = "https://api.darksky.net/forecast/c6fc2eac3ea5647627be1ffec472eb2f/37.8267,-122.4233?units=si"

request({url: url, json: true}, (error, response) => {

    console.log(response.body.daily.data[0].summary + " It is currently " + response.body.currently.temperature + " degrees out." + " There is " +
        (response.body.currently.precipProbability * 100) + " % " + "chance of rain")
})