import NavBar from "./components/layouts/NavBar";
import UserItem from "./components/users/UserItem";
import Users from "./components/users/Users";

import React, { Component } from "react";

class App extends Component{
    render(){
        return(
            <div className="App">
                    <NavBar />
                    <UserItem />
                    <Users />
            </div>
        );
    }
}

export default App;

