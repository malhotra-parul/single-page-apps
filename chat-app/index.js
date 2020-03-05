var app = require("express")();
var http = require("http").createServer(app);
var io = require("socket.io")(http);


app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket)=>{
    console.log("A user connected!");
})

http.listen(3000, ()=>{
    console.log("Listening on port 3000");
});