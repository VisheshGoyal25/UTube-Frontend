import React from 'react';
import '../style/video.css';
const VideoItem = ({video , handleVideoSelect}) => {
    return (
        
        <div onClick={ () => handleVideoSelect(video)} className=' video-item '>
            <div style={{display:'flex'}}>
            <img  src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
            <div >
                <div ><h2>{video.snippet.title}</h2></div>
            </div>
            </div>
            <div>
            <hr style={{width:"100%",color:'lightgrey'}}></hr>
            </div>
        </div>
     
    )
};
export default VideoItem;