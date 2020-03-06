//Make a socket connection on client side
var socket = io.connect("http://localhost:3000");

var message = document.getElementById("message");
var output = document.getElementById("output");
var handle = document.getElementById("handle");
var button = document.getElementById("send");

