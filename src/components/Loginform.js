import React from 'react'
import '../style/LoginForm.css'
import Axios from 'axios'
const random = (length = 6) => {
  
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let str = '';
    for (let i = 0; i < length; i++) {
        str += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return str;

}

 const Loginform=(props)=> {
     const rand=random();

     const handlelogin=async(e)=>{
         e.preventDefault()
         console.log(document.getElementById('a').value);
         console.log(rand)
          if(document.getElementById('a').value!==rand)
          {
              window.alert('Captcha didnot match')
          }
          else{
        await Axios.post('http://localhost:5000/user/login',
        {
           name:document.getElementById('name').value,
           password:document.getElementById('password').value
       
       }).then(()=>{
          props.handlename(document.getElementById('name').value)
       })
       .catch((err)=>{
          
           window.alert("Username or password didn't match")
       })
    }
     }
    return (
        <div style={{width:'100%',height:'100%',margin:'0 0 0 0',zIndex:11000,fontSize:40,position:'fixed'}}>
        <div className="container">
    <div className="row">
        
        <div className="form_bg">
            <form >
                 <h2 style={{textAlign:'center', fontSize:'30px'}}>Login Page</h2>

                <br/>
                <div>
                   <label style={{fontSize:30}}>UserName:</label> <input type="test" required id='name'/>
                </div>
                <br/>
                <br/>
                <div  >
                   <label style={{fontSize:30}}>Password:</label><input style ={{marginLeft:'10px'}} type="password" id='password' required />
                </div>
                <br/>
                <br/>
                <div>
                   <label style={{fontSize:30}}>Enter Captcha:</label><br/><input style ={{marginLeft:'10px', width:'42%'}} type="text" id='a' required/><input type="text" id='b' style={{width:'42%',marginLeft:'8%',borderColor:'black',textAlign:'center'}} placeholder={rand} disabled/>
                </div>
                <br/>
                <br/>
                <br/>
                <div style={{marginLeft:'80%'}}>
                    <button type="submit"  id="login" onClick={handlelogin} style={{fontSize:30}}>Login</button>
                </div>
            </form>
        </div>
    </div>
</div>
        </div>
    )
}
export default Loginform;
