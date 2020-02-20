import React from "react";
import ReactDOM from "react-dom";
import Header from "../components/Header/Header";
import SearchBar from "../components/SearchBar/SearchBar";



class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        };
    }

    onClickHandler = ()=>{

    }

    render(){
       return(
       <div>
            <Header onClickHandler={this.onClickHandler}/>
            <SearchBar />
            {/* <Card>
                {cardContent}
            </Card> */}
        </div>
       )}
}

export default App;