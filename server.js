const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const api = require('./server/routes/api')
const requestPromise = require('request-promise')

const app = express()
mongoose.connect("mongodb://localhost/expenseDB", { useUnifiedTopology: true , useNewUrlParser: true })
app.use('/', api)

app.use(express.static(path.join(__dirname, 'server')))
app.use(express.static(path.join(__dirname,'node_modules')))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const PORT = 3000
app.listen( PORT, () => console.log( `Running server on port ${ PORT }` ) )