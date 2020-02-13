import React from "react";
import classes from "./Preview.module.css";

const preview = (props)=>{
    
           return( <img src={require("../../assets/images/Preview.svg")}
                 alt="Weather App Info"
                 className={classes.Preview}
            />)
};

export default preview;