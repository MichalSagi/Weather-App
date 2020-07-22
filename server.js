const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const api = require('./server/routes/api')
const rp = require('request-promise')


const app = express()
mongoose.connect("mongodb://localhost/weatherDB", { useUnifiedTopology: true , useNewUrlParser: true })

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname,'node_modules')))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/', api)



const PORT = 3000
app.listen( PORT, () => console.log( `Running server on port ${ PORT }` ) )