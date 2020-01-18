import React from "react";
import Titles from "./components/Titles";
import Forms from "./components/Forms";
import Weather from "./components/Weather";
import axios from "axios";

const API_KEY = "60eceb8192ad8884a7c8759fb9ccf81a";


class App extends React.Component{

    state={
        temperature: undefined,
        humidity: undefined,
        city: undefined,
        country: undefined,
        description: undefined,
        err : undefined
    }
    
    getWeather = async (e)=>{
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        e.preventDefault();
        try{
        let res = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=metric`);
        if(city && country){
            console.log(res.data);
            this.setState({
                temperature: res.data.main.temp,
                humidity: res.data.main.humidity,
                city: res.data.name,
                country: res.data.sys.country,
                description: (res.data.weather[0].description).toUpperCase(),
                err : ""
            });
        }
    } catch(error){
        console.log(error);
        this.setState({
            temperature: undefined,
            humidity: undefined,
            city: undefined,
            country: undefined,
            description: undefined,
            err : "Please enter value for City and Country."
        });
    }

    };

    render(){
        return(
            <div>
                <Titles />
                <Forms getW={this.getWeather}/>
                <Weather temp={this.state.temperature} 
                         humidity={this.state.humidity}
                         city={this.state.city}
                         country={this.state.country}
                         desc={this.state.description}
                         err={this.state.err}/>
            </div>
        );
    }
}
export default App;
