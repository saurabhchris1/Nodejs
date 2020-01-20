const request = require("request")

const url = "https://api.darksky.net/forecast/c6fc2eac3ea5647627be1ffec472eb2f/37.8267,-122.4233"

request({url: url}, (error, response) => {

    const data = JSON.parse(response.body)

    console.log(data.currently)
})