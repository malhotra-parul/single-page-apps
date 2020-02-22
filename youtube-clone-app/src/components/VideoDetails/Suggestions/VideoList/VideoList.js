import React from "react";
import ListItem from "./ListItem";


const videoList = (props)=>{

    const videoItem = props.videos.map((video)=>{

        return(
            <ListItem video={video}
                     onVideoSelect={props.onVideoSelect}
                     key={video.id}/>
        ) 

    });
return(
    <div>
        <ul>
            {videoItem}
        </ul>
    </div>
);

}

export default videoList;