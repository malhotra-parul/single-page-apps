import React from "react";
import SearchBar from "./SearchBar";

const KEY = process.env.REACT_APP_API_KEY;

class App extends React.Component{
    
    render(){
        console.log(KEY);
        return(
            <div>
                <SearchBar />
            </div>
        )
    }
}

export default App;