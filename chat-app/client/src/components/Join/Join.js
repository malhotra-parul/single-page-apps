import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Join.css";

const Join = ()=>{
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");
    return(
    <div className="join-outer-container">
        <div className="join-inner-container">
            <h1 className="heading">Join</h1>
            <div><input type="text" placeholder="Name" onChange={(e)=> setName(e.target.value)} className="joinInput" /></div>
            <div><input type="text" placeholder="Room" onChange={(e)=> setRoom(e.target.value)} className="joinInput margin" /></div>
            <Link onClick={(event)=> (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
            <button type="submit" className="button margin">Submit</button>
            </Link>
        </div>
    </div>
    );
};

export default Join;