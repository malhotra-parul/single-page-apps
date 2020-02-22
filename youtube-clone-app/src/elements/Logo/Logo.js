import React from "react";
import classes from "./Logo.module.css";




const logo = (props)=>{
    const logoPhoto = require(`../../assets/${props.assetName}.svg`);
    return(
   <img src={logoPhoto} 
        alt={props.assetName}
        className={classes.Logo}></ img>

    )};

export default logo;