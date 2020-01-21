const geoCode = require("./utils/geocode")
const forcast = require("./utils/forcast")

const address = process.argv[2]

if (!address){
    console.log('Please Provide Address')
}else{
    geoCode(address, (error, data) => {
        if (error){
            return console.log(error)
        }
        forcast(data.latitude, data.longitude, (error, forcastData) => {
            if (error){
                return console.log(error)
            }


            console.log(data.location)
            console.log(forcastData)
        })


    })
}









