import React from 'react';
import Axios from 'axios'
const VideoDetail = ({video,log,user,selected}) => {
    if (!video) {
        return <div></div>;
    }

    const rem=async(e)=>{
        e.preventDefault()
        console.log(video)
        await Axios.delete(`http://localhost:5000/crud/delete/${user}/${video._id}`)
        .then((r)=>{
            console.log(r)
            window.alert("Removed")
        })
        .catch((err)=>{
            console.log(err)
            window.alert("Not present in Watch Later")
        })
    }


    const fun=async(e)=>{
        e.preventDefault()
        await Axios.post('http://localhost:5000/crud/add',
        {
           name:user,
          video:video
       }).then((r)=>{
           
         window.alert(r.data)
        
       })
       .catch((err)=>{
           console.log(err)
        window.alert('Already present')
       })
    }
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  
    return (
        <div>
            <div className='ui embed'>
                <iframe src={videoSrc} allowFullScreen title='Video player'/>
            </div>
            <div className='ui segment'>
                <h4 className='ui header'>{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
                {log?<div>{selected!=="Watch_Later"?<button onClick={fun} style={{width:'140px',fontSize:"16px"}} >Add to Watch Later</button>:
                <button onClick={rem} style={{width:'140px',fontSize:"16px"}} >Remove from Watch Later</button> }</div>:<div></div>}
            </div>
        </div>

    )
}

export default VideoDetail;