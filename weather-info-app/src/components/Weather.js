import React from "react";

const Weather = props =>(
        <div>
            {props.country && props.city && <p>Location : {props.city}, {props.country}</p>}
            {props.temp && <p>Temperature: {props.temp}ºC</p>}
            {props.humidity && <p>Humidity: {props.humidity}%</p>}
            {props.desc && <p>Description: {props.desc}</p>}
            {props.err && <p>{props.err}</p>}
        </div>
        );


export default Weather;