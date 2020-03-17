const express = require("express");
const socketIo = require("socket.io");
const http = require("http");
const PORT = process.env.PORT || 5000;
const app = express();
const server = http.createServer(app);
const io = socketIo(server); //created an instance of socket io.
const router = require("./router");
const {addUser, removeUser, getUser, getUsersInARoom} = require("./users");

io.on("connection", (socket)=>{
    
    socket.on("join", ({name, room}, callback)=>{
        const {error, user} = addUser({id: socket.id, name, room});
        if(error) return callback(error);
        socket.emit("message", {user: "admin", msg: `${user.name}, welcome to room ${user.room}!`});
        socket.broadcast.to(user.room).emit("message", {user:"admin", msg: `${user.name} has joined the chat..`});

        socket.join(user.room);
       callback();
    });
    socket.on("disconnect", ()=>{
        console.log("User Disconnected!");
    });
})

app.use(router);//call router as a middleware

server.listen(PORT, ()=>{
    console.log(`Server started on ${PORT}`);
})
