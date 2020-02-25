import React, { Component } from "react";
import NavBar from "./components/layouts/NavBar";
import axios from "axios";
import Users from "./components/users/Users";

class App extends Component{
    state = {
        users : [],
        loading: false
    };

    async componentDidMount(){
       const client_id = process.env.REACT_APP_CLIENT_ID;
       const secret_key = process.env.REACT_APP_CLIENT_SECRET;
      
        this.setState({loading: true});
        const res = await axios
                            .get(`https://api.github.com/users?client_id=${client_id}&client_secret=${secret_key}`);

        this.setState({
            users : res.data,
            loading: false
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

