var express = require("express");
//app setup
var app = express();
//create a server
var server = app.listen(3000, ()=>{
    console.log("Listening on port 3000");
}) ;
//serve static files on client 
app.use(express.static("public"));