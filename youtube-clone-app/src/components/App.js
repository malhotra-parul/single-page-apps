import React from "react";
import SearchBar from "./SearchBar";

const KEY = process.env.REACT_APP_KEY;

class App extends React.Component{
    render(){
        return(
            <div>
                <SearchBar />
            </div>
        )
    }
}

export default App;