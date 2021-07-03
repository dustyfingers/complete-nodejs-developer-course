const path  = require('path')
const express = require('express')
const http = require('http')
const socketio = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const port = process.env.PORT || 5000
const publicDir = path.join(__dirname, '../public')

app.use(express.static(publicDir))

app.listen(port, () => console.log(`Server started on port ${port}`))