import React, { Component } from "react";
import NavBar from "./components/layouts/NavBar";
import axios from "axios";
import Users from "./components/users/Users";
import Search from "../src/components/users/Search";
const client_id = process.env.REACT_APP_CLIENT_ID;
const secret_key = process.env.REACT_APP_CLIENT_SECRET;

class App extends Component{
    state = {
        users : [],
        loading: false
    };

    async componentDidMount(){
        this.setState({loading: true});
        const res = await axios
                            .get(`https://api.github.com/users?client_id=${client_id}&client_secret=${secret_key}`);

        this.setState({
            users : res.data,
            loading: false
        });
    }

    searchUsers = async (text)=>{
        this.setState({loading: true});
        const res = await axios
            .get(`https://api.github.com/users?q=${text}&client_id=${client_id}&client_secret=${secret_key}`);
        console.log(text, res.data);
        this.setState({
            loading: false,
            users: res.data.items
        });
    }

    render(){
        return(
            <div className="App">
                    <NavBar />
                    <div className="container">
                    <Search searchUsers={this.searchUsers}/>
                    <Users loading={this.state.loading} users={this.state.users}/>
                 </div>
            </div>
        );
    }
}

export default App;

