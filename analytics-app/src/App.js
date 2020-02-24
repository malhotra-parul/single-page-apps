import NavBar from "./components/layouts/NavBar";
import UserItem from "./components/users/UserItem";

import React, { Component } from "react";

class App extends Component{
    render(){
        return(
            <div className="App">
                    <NavBar />
                    <UserItem />
            </div>
        );
    }
}

export default App;

