import React, { Component } from "react";
import NavBar from "./components/layouts/NavBar";
import axios from "axios";
import Users from "./components/users/Users";
import Search from "../src/components/users/Search";
import Alert from "../src/components/layouts/Alert";
const client_id = process.env.REACT_APP_CLIENT_ID;
const secret_key = process.env.REACT_APP_CLIENT_SECRET;

class App extends Component{
    state = {
        users : [],
        loading: false,
        alert: null
    };

    async componentDidMount(){
        this.setState({loading: true});
        const res = await axios
                            .get(`https://api.github.com/users?client_id=${client_id}&client_secret=${secret_key}`);

        this.setState({
            users : res.data,
            loading: false
        });
        console.log(res.data);
    }

    searchUsers = async (text)=>{
        this.setState({loading: true});
        const res = await axios
            .get(`https://api.github.com/users/${text}?client_id=${client_id}&client_secret=${secret_key}`);
        console.log(text, res.data  );
        this.setState({
            loading: false,
            users: res.data
        });
    }

    clearUsers = ()=>{
        this.setState({
            users: [],
            loading: false
        });
    }

    setAlert = (msg, type)=>{
        this.setState({
            alert: {
                msg: msg,
                type: type
            }
        });
    }

    render(){
        
        return(
            <div className="App">
                    <NavBar />
                    <div className="container">
                    <Alert alert={this.state.alert}/>
                    <Search searchUsers={this.searchUsers} 
                            clearUsers={this.clearUsers}
                            showClear={this.state.users.length>1 ? true : false}
                            setAlert={this.setAlert}/>
                    <Users loading={this.state.loading} users={this.state.users}/>
                 </div>
            </div>
        );
    }
}

export default App;

