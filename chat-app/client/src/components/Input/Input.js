import React from "react";
import "./Input.css";


const Input = ({message, setMessage, sendMessage})=>{
    return(
        <form className="form">
            <input  type="text"
                    placeholder="Send a message..."
                    className="input"
                    value={message}
                    onChange={(event)=>setMessage(event.target.value)}
                    onKeyPress={(event)=> event.key === "Enter" ? sendMessage(event) : null}
                    />
            <button className="sendButton" onClick={(event)=> sendMessage(event)}>Send</button>
        </form>
    )
};

export default Input;