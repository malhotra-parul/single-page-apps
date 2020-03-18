import React from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import "./Messages.css";
import Message from "../Message/Message";

const Messages = ({messages, name})=>{
    return(
        <ScrollToBottom>
            {messages.map((message, id)=><div key={id}><Message message={message} name={name}/></div>)}
        </ScrollToBottom>
    )
    
};

export default Messages;
