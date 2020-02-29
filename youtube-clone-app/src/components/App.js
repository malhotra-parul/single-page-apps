import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "../components/VideoList";
import VideoDetail from "./VideoDetail";


class App extends React.Component{
    state = {
        videos:[],
        selectedVideo : null
    }
    componentDidMount = ()=>{
        this.onTermSubmit("Nodejs");
    }
    onTermSubmit = async (term)=>{
        const response = await youtube.get("/search", {
            params: {
                q: term
            }
        });

         await this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    };

    onVideoSelect = (video)=>{
        this.setState({selectedVideo: video});
    };
    
    render(){
       
        return(
            <div>
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
            </div>
        )
    }
}

export default App;