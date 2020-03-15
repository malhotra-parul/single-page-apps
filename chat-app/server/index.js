const express = require("express");
const socketIo = require("socket.io");
const http = require("http");
const PORT = process.env.PORT || 5000;
const app = express();
const server = http.createServer(app);
const io = socketIo(server); //created an instance of socket io.
const router = require("./router");

app.use(router);//call router as a middleware

server.listen(PORT, ()=>{
    console.log(`Server started on ${PORT}`);
})
