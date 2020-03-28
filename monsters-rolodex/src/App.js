import React, { Component } from 'react';
import CardList from "./components/cardList/card-list";
import axios from "axios";
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      monsters: [],
      searchText : ""
    }
  }
  componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/users")
         .then(response => response.data)
         .then(users => this.setState({monsters : users}));
         

  }

  render(){
    const { monsters, searchText } = this.state;
    const filteredMonsters = monsters.filter((monster)=> 
                      monster.name.toLowerCase().includes(searchText.toLowerCase()));
  return (
    <div className="App">
      <input type="search"
             placeholder="search monsters"
             onChange={(e)=> this.setState({searchText: e.target.value})}/>
      <CardList monsters = {filteredMonsters}/>
    </div>
  );
  }
}

export default App;
