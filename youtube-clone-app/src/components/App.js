import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "../components/VideoList";


class App extends React.Component{
    state = {
        videos:[]
    }

    onTermSubmit = async (term)=>{
        const response = await youtube.get("/search", {
            params: {
                q: term
            }
        });

        this.setState({
            videos: response.data.items
        });
    };
    
    render(){
       
        return(
            <div>
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <VideoList videos={this.state.videos}/>
            </div>
        )
    }
}

export default App;