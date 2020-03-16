import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
var socket;

const Chat = ({location})=>{
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");
    const ENDPOINT = "localhost:5000"; //server url

    useEffect(()=>{
        const { name, room } = queryString.parse(location.search); 
        //location is a prop sent from React router
        socket = io(ENDPOINT);
        socket.emit("join", {name, room}, ()=>{});
        setName(name);
        setRoom(room);
    }, [ENDPOINT, location.search])

    return(
    <h1>Chat page</h1>
    )
    };

export default Chat;