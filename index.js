
const express = require('express')
var app = express();
const path = require('path')
const PORT = process.env.PORT || 4000
const http = require('http').Server(app)
const io = require('socket.io')(http)

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

http.listen(PORT, () => console.log(`Listening on ${ PORT }`))

io.on('connection', function(socket){
	socket.on('event', function(msg){
		io.emit('event',msg);
	});
	console.log('A user connected sucessfully');	
});