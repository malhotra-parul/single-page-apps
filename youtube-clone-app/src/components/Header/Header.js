import React from "react";
import Logo from "../../elements/Logo/Logo";
import classes from "./Header.module.css";

const header = (props)=>{
return(
    <div className={classes.Header}>
    <header onClick={props.clicked} >
        <Logo assetName="youtube_logo"/>
        <h3>Youtube</h3>
    </header>
    </div>
);
};

export default header;