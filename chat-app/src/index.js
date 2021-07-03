const express = require('express');
const path = require('path');
const socketio = require('socket.io');
 

const port = process.env.PORT || 4446;
const publicDirPath = path.join(__dirname, '../public');

const app = express();
app.use(express.static(publicDirPath));
 
const server = app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`);
});
 
socketio.listen(server);
const io = socketio(server);

// Set up some message when socket.io gets 'connectoion' event
io.on('connection', () => {
    console.log('New websocket connection');
});