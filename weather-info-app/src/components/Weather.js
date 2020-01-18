import React from "react";

class Weather extends React.Component{
render(){
    return(
        <div>
            {this.props.country && this.props.city && <p>Location : {this.props.city}, {this.props.country}</p>}
            {this.props.temp && <p>Temperature: {this.props.temp}ºC</p>}
            {this.props.humidity && <p>Humidity: {this.props.humidity}%</p>}
            {this.props.desc && <p>Description: {this.props.desc}</p>}
            {this.props.err && <p>{this.props.err}</p>}
        </div>
        );
    }
}

export default Weather;