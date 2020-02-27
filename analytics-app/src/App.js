import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/layouts/NavBar";
import axios from "axios";
import Users from "./components/users/Users";
import Search from "../src/components/users/Search";
import Alert from "../src/components/layouts/Alert";
import About from "./components/pages/About";
import './App.css';
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
       
    }

    searchUsers = async (text)=>{
        this.setState({loading: true});
        const res = await axios
            .get(`https://api.github.com/search/users?q=${text}&client_id=${client_id}&client_secret=${secret_key}`);
   
        this.setState({
            loading: false,
            users: res.data.items   
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
        
        setTimeout(()=>{this.setState({alert: null})}, 3000);
    }

    render(){
        
        return(
            <Router>
            <div className="App">
                    <NavBar />
                    <div className="container">
                    <Alert alert={this.state.alert}/>
                    <Switch>
                    <Route
                           exact path="/"
                            render={(props)=>(
                                <Fragment>
                                <Search searchUsers={this.searchUsers} 
                                clearUsers={this.clearUsers}
                                showClear={this.state.users.length>1 ? true : false}
                                setAlert={this.setAlert}/>
                                <Users loading={this.state.loading} users={this.state.users}/>
                                </Fragment>
                            )}
                                />
                            <Route exact path="/about" component={About}/>
                    </Switch>
                 </div>
            </div>
            </Router>
        );
    }
}

export default App;

