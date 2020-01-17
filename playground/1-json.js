const fs = require('fs')

// const book ={
//     title: 'Ego is the enemy',
//     author: 'Ryan holiday'
// }
//
// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data =  JSON.parse(dataJSON)
//
// console.log(data.title)

const readBuffer = fs.readFileSync('1-json.json')
const dataJSON = JSON.parse(readBuffer.toString())

dataJSON.name = 'Saurabh'
dataJSON.planet = 'Mars'
dataJSON.age = '25'

dataString = JSON.stringify(dataJSON)
fs.writeFileSync('1-json.json', dataString)