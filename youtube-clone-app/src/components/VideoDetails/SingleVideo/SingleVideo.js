import React from "react";
import classes from "./SingleVideo.module.css";

const singleVideo = (props)=>{
    if (!props.video) {
        return <div>Loading...</div>
    }
    const url = `https://www.youtube.com/embed/${props.video.id}?controls=1`;
  
    return(
        
        <div className={classes.VideoWrapper}>
        <div className={classes.SingleVideo}>
        <iframe width="900" 
                   height="450"
                   src={url}
                   title={props.video.title}>
        </iframe>
        </div>
        <div className={classes.VideoDetails}>
            <h3>{props.video.title}</h3>
            <p>{props.video.description}</p>
        </div>
        </div>

    )};

export default singleVideo;