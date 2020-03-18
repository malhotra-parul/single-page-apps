import React from "react";
import "./TextContainer.css";
import onlineIcon from "../../icons/onlineIcon.png";    

const TextContainer = ({users})=>{
    console.log(users);

    return(
        <div className="textContainer">
            <div>
            <h3>Realtime Chat Application <span role="img" aria-label="emoji">💬</span></h3>
            <h4>Created with React, Express, Node and Socket.IO <span role="img" aria-label="emoji">❤️</span></h4>
            </div>
            {
                users ?
            (<div>
                <h3>People currently chatting:</h3>
                <div className="activeContainer">
                  <h4>
                    {users.map(({name}) => (
                      <div key={name} className="activeItem">
                        {name}
                        <img alt="Online Icon" src={onlineIcon}/>
                      </div>
                    ))}
                  </h4>
                </div>
              </div>) :
            null }
        </div>
    );
};

export default TextContainer;