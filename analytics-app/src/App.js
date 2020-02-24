import NavBar from "./components/layouts/NavBar";
import axios from "axios";
import Users from "./components/users/Users";

import React, { Component } from "react";

class App extends Component{
    state = {
        users : [],
        laoding: false
    };

    async componentDidMount(){
        this.setState({laoding: true});
        const res = await axios.get("https://api.github.com/users");

        this.setState({
            users : res.data,
            laoding: false
        });
    }

    render(){
        return(
            <div className="App">
                    <NavBar />
                    <div className="container">
                    <Users loading={this.state.loading} users={this.state.users}/>
                    </div>
            </div>
        );
    }
}

export default App;

