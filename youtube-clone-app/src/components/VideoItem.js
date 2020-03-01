import React from "react";
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';

const VideoItem =  ({video, onVideoSelect})=>{
return (
    <Card variant="outlined" style={{backgroundColor: "#d7fffd", padding: 11}}>
    <div onClick={()=>{onVideoSelect(video)}}>
    <Grid container direction="row" wrap>
    <Grid item lg={5}>
    <img src={video.snippet.thumbnails.default.url} alt=""/> </Grid>
    <Grid item lg={6}>
    {video.snippet.title}
    </Grid>
    </Grid>
    </div>
    </Card>
    )
};

export default VideoItem;