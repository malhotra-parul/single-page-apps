import React from "react";
import classes from "./WeatherDetails.module.css";

import Icon from "../../elements/Icon/Icon";
import Date from "../WeatherDetails/Date/Date";
import Description from "../WeatherDetails/Description/Description";
import Temperature from "../WeatherDetails/Temperature/Temperature";

const weatherDetails = (props) =>{
    return(
        <div className={classes.WeatherDetailsWrapper}>
            <div className={classes.WeatherIconWrapper}>
                <Icon type={props.data.description}/>
            </div>
            <div className={classes.WeatherDataWrapper}>
                <Temperature degrees={props.data.temperature}/>
                <Description type={props.data.description}/>
                <Date />
            </div>
        </div>
    )
}

export default weatherDetails;