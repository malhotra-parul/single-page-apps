import React from "react";
import Titles from "./components/Titles";
import Forms from "./components/Forms";
import Weather from "./components/Weather";


class App extends React.Component{
    render(){
        return(
            <div>
                <Titles />
                <Forms />
                <Weather />
            </div>
        );
    }
}
export default App;
