import React from 'react';
const ListWhole = ({video,sel}) => {
    let tit=video.snippet.title
    return (
    <div className="card" onClick={ () => sel(video)} style={{width: "32%",height:"320px", display:'inline-block',marginRight:10}}>
    <img style={{height:260, width:"98%"}}src={video.snippet.thumbnails.medium.url} className="card-img-top" alt="Not Available"/>
    <br/>
    <div className="card-body" style={{height:20,overflow:'hidden'}}>
                <h3 className='ui header'syle={{ margin:"1% 1% 0px 1%"}}>{tit}</h3>
    </div>
    </div>
  

    )
}

export default ListWhole;