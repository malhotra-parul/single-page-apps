import React from "react";
import Titles from "./components/Titles";
import Forms from "./components/Forms";
import Weather from "./components/Weather";
import axios from "axios";

const API_KEY = "60eceb8192ad8884a7c8759fb9ccf81a";


class App extends React.Component{
    
    getWeather = async (e)=>{
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        e.preventDefault();
        let res = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=metric`);
        console.log(res.data);
    };

    render(){
        return(
            <div>
                <Titles />
                <Forms getW={this.getWeather}/>
                <Weather />
            </div>
        );
    }
}
export default App;
