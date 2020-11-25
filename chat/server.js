const app = require('express');
const http = require('http').createServer(app);
const io = require("socket.io")(http, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

io.on('connection', socket => {
    console.log("a user connected");
    socket.on('message', message => {
        console.log(message);
        io.emit('message', message);
    })
    socket.on('disconnect', () => {
        console.log('user desconnected')
    });
})

io.emit('some event', { someProperty: 'some value', otherProperty: 'other value' });

io.on('connection', socket => {
    socket.broadcast.emit('hi');
});

http.listen(5000, function () {
    console.log('listening on port 5000');
})