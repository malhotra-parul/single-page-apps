var app = require("express")();
var http = require("http").createServer(app);

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/index.html");
});

http.listen(3000, ()=>{
    console.log("Listening on port 3000");
});