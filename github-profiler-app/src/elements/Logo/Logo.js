import React from "react";
import classes from "./Logo.module.css";
import { render } from "react-dom";

const logo = (props)=> {
    return(
        <h2 className={classes.Logo} 
            onClick={props.clicked}>Github Analytics</h2>
    );
}

export default logo;