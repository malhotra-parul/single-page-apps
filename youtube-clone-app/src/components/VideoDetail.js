import React from "react";


const VideoDetail = ({video})=>{

    if(!video){
        return <div>Loading...</div>
    }
    const url = `https://www.youtube.com/embed/${video.id.videoId}`;
    return(
            <div>
            <div>
            <iframe width="860" height="515" title="video player"
            src={url} frameBorder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen></iframe>
            </div>
            <div>
            <h3>{video.snippet.title}</h3>
            <p>{video.snippet.description}</p> </div>
            </div>
    );
};

export default VideoDetail;