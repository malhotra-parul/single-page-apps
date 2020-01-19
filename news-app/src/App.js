import React from 'react';
import Form from "./components/Form";
import axios from "axios";
import Title from './components/Title';
import Article from './components/Article';
const API_KEY="773495d9fa0c441c87cfec9eba7f2d89";

class App extends React.Component{

    state={
      articles: [],
      loaded: false,
      keyword: undefined
    }

    getArticles = async ()=>{
      try{
     
      const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=technology&general&apiKey=${API_KEY}`);
      const data = res.data;
      console.log(data);
      if(data){
        
        this.setState({
          articles: data.articles,
          loaded: true
        });
      }
      }
      catch(err){
        console.log(err);
      }
    }
    handleSubmit =  (e)=>{
      e.preventDefault();
      console.log(this.state);
     
      };
    handleChange = async (e)=>{
      this.getArticles();
      
      await this.setState({
        keyword: e.target.value
      });
      
    }

    componentDidMount(){
      this.getArticles();
    }
  

    render(){
      return(
        
        <div>
          <Title />
          <Form onsubmit={this.handleSubmit} onchange={this.handleChange}/>
          <Article data= {this.state.articles} keyword={this.state.keyword}/>
        </div>
      );
    }
}
export default App;
