import React from "react";
import axios from "axios";
import classes from "./App.module.css";
import {MoonLoader} from "react-spinners";
import assetMapping from "../assets/assetMapping.json";
import Card from "../elements/Card/Card";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Preview from "../components/Preview/Preview";
import SearchBar from "../components/SearchBar/SearchBar";
import WeatherDetails from "../components/WeatherDetails/WeatherDetails";
import ErrorNotice from "../components/ErrorNotice/ErrorNotice";
require('dotenv').config();

class App extends React.Component{

    state = {
        searchBarInput : "",
        weatherDetails : {
            temperature: null,
            description: ""
        },
        loading: false,
        error: false
    }

    searchBarHandler = (e)=> {
        this.setState({
            searchBarInput: e.target.value
        })
    }

    tryAgainHandler = (e)=> {
        this.setState({
            searchBarInput: "",
            weatherDetails: {},
            error: false
        })
    }

    setWeather = ()=> {
        const city = this.state.searchBarInput;
        const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
        const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
        const URL = API_URL + `?q=${city}&appid=${API_KEY}&units=metric`;
        this.setState({
            weatherDetails:{},
            loading: true,
            error: false
        }, ()=>{
            axios.get(URL)
                 .then((response)=> {
                     
                     const data = response.data;
                     if(data.cod === 200){
                        this.setState({
                            weatherDetails: {
                                temperature: data.main.temp,
                                description: data.weather[0].main
                            },
                            loading: false
                        });
                        
                     }else{
                        throw data.cod;
                     }
                 })
                 .catch(err => {
                     console.log(err);
                     this.setState({
                         error: true,
                         loading: false
                     });
                 });
        });
    }

    render(){
        let cardContent = <Preview />;
        if(this.state.loading){
            cardContent = <MoonLoader />;
        } else if(this.state.error){
            cardContent = <ErrorNotice onClickHandler={this.tryAgainHandler}/>;
        }else if(this.state.weatherDetails.description && this.state.weatherDetails.temperature !== ""){
            cardContent = <WeatherDetails data={this.state.weatherDetails}/>;
        }

        return(
            <div className={classes.AppWrapper}>
                <Header color={assetMapping.colors[
                    (this.state.error) ? "error" : this.state.weatherDetails.description]}
                        onClickHandler={this.tryAgainHandler} />
                <main className={classes.AppMain}>
                    <SearchBar onChangeHandler={this.searchBarHandler}
                               error={this.state.error}
                               onClickHandler={this.setWeather}
                               value={this.state.searchBarInput}
                                    />
                    <Card>
                         {cardContent}
                    </Card>
                </main>
                <Footer color={assetMapping.colors[
                    (this.state.error)? "error" : this.state.weatherDetails.description]}
                        onClickHandler={this.tryAgainHandler}/>
            </div>
        );
    }
}
export default App;
