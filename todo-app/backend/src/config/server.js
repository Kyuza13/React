const port = 3003

const bodyParser = require('body-parser') 
const express = require('express') 
const server = express()
const allowCors = require('./cors')

server.use(bodyParser.urlencoded({ extended: true })) 
server.use(bodyParser.json()) //obs: sempre que ver o server.use quer dizer que é um midware
server.use(allowCors)

server.listen(port, function() {    
     console.log(`BACKEND is running on port ${port}.`)
})

module.exports = server
