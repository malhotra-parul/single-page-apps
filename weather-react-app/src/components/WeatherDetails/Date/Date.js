import React from "react";
import classes from "./Date.module.css";
import dateformat from "dateformat";

const date = (props) =>{
    const today = new Date();
    return(
        <div className={classes.DateWrapper}>
            {dateformat(today, "dddd, mmmm dd")}
        </div>
    )
}

export default date;
