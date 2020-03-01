import React from "react";
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';

const VideoDetail = ({video})=>{

    if(!video){
        return <div>Loading...</div>
    }
    const url = `https://www.youtube.com/embed/${video.id.videoId}`;
    return(
            <Card variant="outlined" style={{backgroundColor: "#d7fffd"}}>
            <Grid container direction="column" alignItems="center" justify="flex-start" >
            <Grid item xs={11} > 
           
            <iframe width="860" height="475" title="video player"
            src={url} frameBorder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen></iframe>
            </Grid>
            <Grid item xs={11}
             >
            <h3>{video.snippet.title}</h3>
            <p>{video.snippet.description}</p> </Grid>
            </Grid>
            </Card>
    );
};

export default VideoDetail;