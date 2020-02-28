import React from "react";
import VideoList from "./VideoList";

const VideoItem =  ({video})=>{
return <div>{video.snippet.title}</div>
};

export default VideoItem;