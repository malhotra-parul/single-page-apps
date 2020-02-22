import React from "react";

const listItem = ({onVideoSelect, video}) =>{
  
    const thumbnailUrl = video.thumbnails.medium.url; 
return(
    <li onClick={() => onVideoSelect(video)}>
            <div>
                <img src={thumbnailUrl} alt="thumbnail Video" />
            </div>
            </li>
)
}

export default listItem;