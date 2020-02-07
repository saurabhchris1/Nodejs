const path = require('path')
const express = require('express')
const hbs = require('hbs')

const geocode = require('./utils/geocode')
const forcast = require('./utils/forcast')


const app = express()
const port = process.env.PORT || 3000

// Define paths for express config
const publicDirPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handelbars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// setup static directory to serve
app.use(express.static(publicDirPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Saurabh Jaiswal'
    })
})

app.get('/about', (req,res) => {
    res.render('about', {
        title: 'About me',
        name: 'Saurabh Jaiswal'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        name: 'Saurabh Jaiswal'
    })
})

app.get('/weather', (req,res) => {
    if (!req.query.address){
        return res.send({
            error: 'You must provide a address'
        })
    }

    geocode(req.query.address, (error, data) => {
        if (error){
            return res.send({error: error})
        }
        forcast(data.latitude, data.longitude, (error, forcastData) => {
            if (error){
                return res.send({ error: error })
            }

            res.send({
                forcast: forcastData,
                location: data.location,
                address: req.query.address
            })

        })


    })

})

app.get('/products', (req,res) => {
    if (!req.query.search) {
        return res.send({
            error:'You must provide a search term'
        })
    }
    console.log(req.query.search)
    res.send({
        products: []
    })
})



app.get('/help/*', (req, res) => {
   res.render('404', {
       title: '404',
       name: 'Saurabh Jaiswal',
       errorMessage: 'Help article not found'
   })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Saurabh Jaiswal',
        errorMessage: 'page not found'
    })
})

app.listen(port, () => {
    console.log("Server is up on port " + port)
})


