var express = require('express');
var http = require('http').Server(app);
var cors = require('cors');
var io = require('socket.io')(http);
var mysql = require('mysql');

//We boot up an express server instance.
var app = express();
app.use(cors());
app.use(express.static('public')); 
//app.server = http.createServer(app);
app.listen(8080);

var connect = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'users' // users- name of my dataBase
});

connect.connect(function (error) {
    if(!!error) {
        console.log('Error');
    } else {
        console.log('Connected');
    }
});

app.get('/', function (request, response) {
    connect.query("SELECT * FROM user", function (error, rows, fields) { // "SELECT * FROM database"
        if (!!error) {
            console.log('Error in the query');
        } else {
            console.log('Successful query');
        }
    });
});


//Chat application with socket.io
io.on('connection', function(socket){ 
  console.log('a user connected');    //user conected
  socket.on('disconnect', function(){
    console.log('user disconnected');  //user disconect
  });
});


io.on('connection', function(socket){ 
  socket.on('chat message', function(msg){  //print the chat message 
    console.log('message: ' + msg);
  });
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){  //send a message including myself,
    io.emit('chat message', msg);       //send a message to evryone (using emit)
  });
});