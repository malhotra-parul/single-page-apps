import NavBar from "./components/layouts/NavBar";

import Users from "./components/users/Users";

import React, { Component } from "react";

class App extends Component{
    render(){
        return(
            <div className="App">
                    <NavBar />
                    <div className="container">
                    <Users />
                    </div>
            </div>
        );
    }
}

export default App;

