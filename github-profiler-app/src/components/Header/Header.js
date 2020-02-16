import React from "react";
import classes from "./Header.module.css";
import Logo from "../../elements/Logo/Logo";

const header = (props) => {
    return(
        <header className={classes.Header}>
           <Logo clicked={props.onClickHandler}/>
        </header>
    );
}

export default header;