import React from "react";
import classes from "./Button.module.css";
import Logo from "../../elements/Logo/Logo";

const button = (props)=>{

    const buttonClasses = [classes.Button, 
        (props.position === "on-form") ? "classes.FormWrapper" : null];
    return(
        <div className={ buttonClasses.join(" ") }>
    <button type={props.type}
            value={props.value}
            name={props.name}
            onClick={props.clicked}><Logo assetName="Search_icon"/>
    </button>
    </div>
    )};

export default button;