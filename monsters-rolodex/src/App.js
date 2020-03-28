import React, { Component } from 'react';
import CardList from "./components/cardList/card-list";
import axios from "axios";
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      monsters: []
    }
  }
  componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/users")
         .then(response => response.data)
         .then(users => this.setState({monsters : users}));
         

  }

  render(){
    const { monsters } = this.state;
  return (
    <div className="App">
      <CardList monsters = {monsters}/>
    </div>
  );
  }
}

export default App;
