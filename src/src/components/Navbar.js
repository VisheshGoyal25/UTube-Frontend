import React from 'react'
import '../style/Navbar.css'
import {useState} from 'react'
import {Link} from 'react-router-dom'
export default function Navbar(props) {
    const [col,setcol]= useState({home:'lightgreen',trending:'transparent',news:'transparent',sports:'transparent',Watch_Later:'transparent'})
    function managecolor(value)
    {
        props.handlenav(value)
        const temp={home:'transparent',trending:'transparent',news:'transparent',sports:'transparent',Watch_Later:'transparent'}
        if(value==='Home')
       temp.home='lightgreen'
       if(value==='Trending')
       temp.trending='lightgreen'
       if(value==='News')
       temp.news='lightgreen'
       if(value==='Sports')
       temp.sports='lightgreen'
       if(value==='Watch_Later')
       temp.Watch_Later='lightgreen'
       setcol(temp);
        
    }
    return (
        <div >
            <div>
            <Link to='/'><img alt="LOGO" src={require('../Image/logo.jpg')} style={{width:"4%", height:"40px", position:"Fixed", marginTop:12,marginLeft:10, zIndex:'20300'}} />
            <b style={{ position:"Fixed", marginTop:25,fontSize:32,fontFamily:"  Roboto,Arial,sans-serif",marginLeft:"5%",zIndex:'20300'}} >UTube</b></Link>
            </div>            
            <ul style={{marginTop:"55px", border:'solid',borderBlockColor:'transparent',zIndex:2020,  minWidth:120}}>
             <li><button type='button' style={{width:'100%', border:'hidden',fontSize:26,backgroundColor:col.home}} onClick={()=>managecolor('Home')}>Home</button></li>
             <li><button type='button' style={{width:'100%', border:'hidden',fontSize:26,backgroundColor:col.trending}} onClick={()=>managecolor('Trending')}>Trending</button></li>
             <li><button type='button' style={{width:'100%', border:'hidden',fontSize:26,backgroundColor:col.news}} onClick={()=>managecolor('News')}>News</button></li>
             <li><button type='button' style={{width:'100%', border:'hidden',fontSize:26,backgroundColor:col.sports}}  onClick={()=>managecolor('Sports')}>Sports</button></li>
             {props.log?<li><button type='button' style={{width:'100%', border:'hidden',fontSize:26,backgroundColor:col.Watch_Later}}  onClick={()=>managecolor('Watch_Later')}>watch Later</button></li>:<></>}
</ul>
        </div>
    )
}