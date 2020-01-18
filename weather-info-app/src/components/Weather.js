import React from "react";

const Weather = props =>(
        <div className="weather__info">
            {
                props.country && props.city && <p className="weather__key">Location : 
                <span className="weather__value"> {props.city}, {props.country}</span></p>
                }
            {
                props.temp && <p className="weather__key">Temperature: 
                <span className="weather__value"> {props.temp}ºC</span></p>
                }
            {
                props.humidity && <p className="weather__key">Humidity: 
                <span className="weather__value"> {props.humidity}%</span></p>
                }
            {
                props.desc && <p className="weather__key">Description: 
                <span className="weather__value"> {props.desc}</span></p>
                }
            {
                props.err && <p className="weather__error">{props.err}</p>
                }
        </div>
        );


export default Weather;