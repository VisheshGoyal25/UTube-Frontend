import React from 'react';
import SearchBar from './Searchbar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import ListWhole from './ListWhole';
import Navbar from './Navbar'
import {Route,BrowserRouter as Router,Link,Switch, Redirect}from 'react-router-dom'
import '../style/App.css'
import Login from './Loginform.js'
import Signup from './SignUp.js'
import '../style/Videoitem.css'
import Axios from 'axios';
class App extends React.Component {
    state = {
        selectedNav:"Home",
        videos: [],
        selectedVideo: null,
        isLoggedin:false,
        username:"Null",
        
    }
    handlename=(name)=>{
        this.setState({isLoggedin:true,username:name})
    }
    handleSubmit = async (termFromSearchBar) => {
        const response = await youtube.get('/search', {
            params: {
                q: termFromSearchBar
            }
        })
       
        this.setState({
            videos: response.data.items,
            selectedVideo: null,
            selectedNav:'Home'
            

        })
        
    };

    handleVideoSelect = (video) => {
        this.setState({selectedVideo: video})
    }
    componentDidMount()
    {
        this.handleSubmit("videos")
    }
     getWatchLater=async()=>{
       
        await Axios.get(`http://localhost:5000/crud/get/${this.state.username}`).then((r)=>{
           const ids=r.data
          
          const temp=ids.map(id=>{ id.video._id=id._id; return id.video})
          console.log(temp)
           this.setState({
               videos:temp,
               selectedVideo:null
           });
           
       })
       .catch((err)=>{
           
           window.alert("Server Error while fetching...")
       })
    }
    handlenav = (nav) => {
        this.setState({selectedNav: nav})
           if(nav==='Home'){nav=''}
           if(nav==='Watch_Later')
           {
              this.getWatchLater()
           }
           else{
            this.handleSubmit(nav)
           }
        
    }
    handlesignout=()=>{
        if(this.state.selectedNav==='Watch_Later'){
          window.alert('Water Later is Selected')
        }
        else{
        this.setState(({isLoggedin:false,username:""}))
        }
    }
    render(){
        const HELLO="Hello  "  
    if(this.state.selectedVideo){
        return (
            <Router>
        <div style={{top:0, minWidth:1250}}>
        {this.state.isLoggedin===false ?<>
           <Switch>
        <Route path='/Login' exact render={props => (<Login {...props} handlename={this.handlename}/>)}/>
        <Route path='/SignUp' exact render={props => (<Signup {...props} handlename={this.handlename}/>)}/>
        </Switch>
        </>:<Route path="/" render={() => {return (<Redirect to="/" /> )}}/>
    }
            <div style={{display:'inline-block', margin:"0 0 0 1px"}}>
                <Navbar  handlenav={this.handlenav} nav={this.state.selectedNav} log={this.state.isLoggedin} />
            </div>
            <div style={{display:'inline-block', margin:"0% 0 0 11%",width:"89%",borderLeftWidth:1,top:0}}>
                <div style={{position:"fixed",zIndex:4, width:"100%", border:"hidden",backgroundColor:"white",top:0}}>
                    <SearchBar  handleFormSubmit={this.handleSubmit}/>
                </div>

                {this.state.isLoggedin?<div style={{ zIndex:'20030',margin:"0px 0 0 70%", width:"30%",marginTop:0,position:'fixed',fontSize:'20PX'}}>{HELLO} {this.state.username}     <button className='button' onClick={this.handlesignout} style={{width:'20%'}}>signout</button></div>:
                                   <div style={{ zIndex:'20030',margin:"0px 0 0 80%",marginTop:0,position:'fixed',backgroundColor:'white', width:'8%'  }}><Link to='/Login'><button className='button'>Login</button></Link><Link to='/Signup'><button className='button'>SignUp</button></Link></div>}
                <hr style={{width:"100%",color:'lightgrey',marginTop:"53px",position:"fixed",zIndex:8}}></hr>
                
                <div className='ui grid ' style={{marginTop:60}}>
                    <div className="listv">
                        <div className="ten wide column ">
                            <VideoDetail video={this.state.selectedVideo} List={this.state.videos} log={this.state.isLoggedin} user={this.state.username} selected={this.state.selectedNav}/>
                        </div>
                        <div className="ten wide column">
                            <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        </Router>
        )
    }
    const temp=this.state.videos.map((video)=>{return<ListWhole video={video} sel={this.handleVideoSelect}> </ListWhole>})
         
      
    return(
        <Router>
       <div style={{top:0,  minWidth:1250 }}>
       
           {this.state.isLoggedin===false?<>
          
           <Switch>
        <Route path='/Login' exact render={props => (<Login {...props} handlename={this.handlename}/>)}/>
        <Route path='/SignUp' exact render={props => (<Signup {...props} handlename={this.handlename}/>)}/>
        </Switch>
        </>:<Route path='/' render={() => {return (<Redirect to="/" /> )}}/>
        
    }
        <div style={{display:'inline-block', margin:"0 0 0 1px"}}>
            <Navbar  handlenav={this.handlenav} nav={this.state.selectedNav} log={this.state.isLoggedin} />
        </div>
        <div style={{display:'inline-block', margin:"0% 0 0 11%",width:"89%",borderLeftWidth:1,top:0}}>

            <div className='ui container' style={{position:"fixed",zIndex:4, width:"100%", border:"hidden",backgroundColor:"white",top:0}}>
                <SearchBar  handleFormSubmit={this.handleSubmit}/>
            </div>

            {this.state.isLoggedin?<div style={{ zIndex:'20030',marginLeft:"70%", width:"30%",marginTop:0,position:'fixed',fontSize:'20PX'}}>{HELLO} {this.state.username}     <button className='button' onClick={this.handlesignout} style={{width:'20%',marginLeft:'10px'}}>signout</button></div>:
            <div style={{ zIndex:'20030',margin:"0px 0 0 80%",position:'fixed',backgroundColor:'white',width:'8%'  }}><Link to='/login'><button className='button'>Login</button></Link><Link to='/Signup'><button className='button'>SignUp</button></Link></div>}
       
            <hr style={{width:"100%",color:'lightgrey',marginTop:"53px",position:"fixed",zIndex:8}}></hr>

            <div style={{marginTop:80,  zIndex:-1}} >
                {temp}
            </div>
        </div>
    </div>
    </Router>
    )
}


}



export default App;