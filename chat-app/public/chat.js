//Make a socket connection on client side
var socket = io.connect("http://localhost:4000");

var message = document.getElementById("message");
var output = document.getElementById("output");
var handle = document.getElementById("handle");
var button = document.getElementById("send");
var feedback = document.getElementById("feedback");

//button will listen to click event and once received, it will emit a chat message
// with the object being passed to server

button.addEventListener("click", ()=>{
    socket.emit("chat", {
        message: message.value,
        handle: handle.value
    })
});

//emit event for typing
message.addEventListener("keypress", ()=>{
    socket.emit("typing",handle.value)
});

//listen for chat event
socket.on("chat", (data)=>{
    feedback.innerHTML = "";
    output.innerHTML += "<p><strong>" + data.handle + ":</strong>" + data.message + "</p>";

});

socket.on("typing", (data)=>{
    feedback.innerHTML = "<p><em>" + data + " is typing a message...</em></p>";
});

