import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "../components/VideoList";
import VideoDetail from "./VideoDetail";
import NavBar from "./NavBar";
import Grid from '@material-ui/core/Grid';


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
                <Grid container justify="center" >
                <NavBar />
                <Grid container direction="row" justify="center">
                <Grid item xs={12} sm={8} lg={6}>
                <SearchBar onFormSubmit={this.onTermSubmit}/> </Grid>

                <Grid container direction="row" spacing={4} justify="space-evenly" nowrap>
                <Grid item xs={6} sm={8} lg={8} >
                <VideoDetail video={this.state.selectedVideo}/>
                </Grid>
                <Grid item xs={6} sm={4} lg={3} >
                <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
                </Grid>
                </Grid>
                </Grid>
                </Grid>
            </div>
        )
    }
}

export default App;