import React, { Fragment, } from "react";
import { MoonLoader } from "react-spinners";
import Header from "../components/Header/Header";
import SearchBar from "../components/SearchBar/SearchBar";
import Card from "../elements/Card/Card";
import SingleVideo from "../components/VideoDetails/SingleVideo/SingleVideo";
import VideoList from "../components/VideoDetails/Suggestions/VideoList/VideoList";

const YouTube = require('simple-youtube-api');
const youtube = new YouTube("YOURKEY");

class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            searchQuery : "",
            loading: false,
            error: false,
            videoDetails: {
                title: "",
                description: "",
                url: "",
                id:"",
                suggestions : [],
                selection : null
            }            

        }
    }
    tryAgainHandler = async()=>{
        await this.setState({
            searchQuery: "",
            loading:false,
            error: false,
            videoDetails:{}
        });
        

    };

    handleChange = async (e)=>{
       await this.setState({
            searchQuery: e.target.value,
            loading:false
        });
   
    };

    searchVideos = async ()=>{
        const query = this.state.searchQuery;

        await this.setState({
            loading: true,
            error: false
        }, ()=>{
        
        youtube.searchVideos(query, 5)
        .then(response => {
        if(response){
            
         this.setState({
             
            videoDetails:{
                title: response[0].title,
                description: response[0].description,
                url: response[0].url,
                id: response[0].id,
                suggestions: response,
                selection : response[0]
            },
            error: false,
            loading: false
        })
       
        } else{
            console.log("Error!");
        }
         })
         .catch((err)=>{
             console.log(err);
             this.setState({
                error: true,
                loading: false
            });
         })
        })
        };



    render(){
      
        return(
            <Fragment >
            <Header clicked={this.tryAgainHandler}/>
            <SearchBar onChangeHandler={this.handleChange}
                        onClickHandler={this.searchVideos}/>
            <Card>
            <SingleVideo video={this.state.videoDetails.selection}/>
            <VideoList videos={this.state.videoDetails.suggestions} 
           onVideoSelect = {selection =>
                this.setState(
                    {videoDetails : {selection : selection}})}/>
            </Card>
            </Fragment>
        );
    }
}
export default App;
