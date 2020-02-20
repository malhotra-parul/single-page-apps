import React from "react";
import classes from "./Button.module.css";

const button = props => {
    let buttonClasses = [classes.ButtonWrapper, 
        (props.position === "onForm") ? classes.FormButtonWrapper : null];
        console.log(buttonClasses.join(" "));
return(
    <div className={buttonClasses.join(" ")}>
  <button type={props.type} onClick={props.clicked} name={props.name}>
    {props.children}
  </button>
  </div>
)};

export default button;
