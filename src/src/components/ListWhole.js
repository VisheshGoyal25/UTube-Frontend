import React from 'react';
import '../style/ListWhole.css'
const ListWhole = ({video,sel}) => {
    let tit=video.snippet.title
    return (
    <div  className="list" onClick={ () => sel(video)} style={{width: "32%",height:"320px", display:'inline-block',marginRight:10}}>
    <img style={{height:260, width:"98%"}}src={video.snippet.thumbnails.medium.url}  alt="Not Available"/>
    <br/>
    <div style={{height:20,width:"98%",overflow:'hidden'}}>
                <h3>{tit}</h3>
    </div>
    </div>
  

    )
}

export default ListWhole;