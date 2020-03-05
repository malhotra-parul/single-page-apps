var express = require("express");
var socket = require("socket.io");

//app setup
var app = express();
//create a server
var server = app.listen(3000, ()=>{
    console.log("Listening on port 3000");
}) ;
//serve static files on client 
app.use(express.static("public"));

//socket server side setup
var io = socket(server); //A socket now sits on the server listening to any connections.
io.on("connection", (socket)=>{
    console.log("Made socket connection: " + socket);
});//io listens to an event - connection. Once connection is made, the callback is fired.
