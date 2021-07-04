import Axios from 'axios'
import React from 'react'
import '../style/LoginForm.css'

const SignUp=(props)=> {
   
    const postData =async(e)=>
    {
        e.preventDefault()
          if(document.getElementById('password').value!==document.getElementById('repass').value){
          
              window.alert('password didnot match')
          }
          await Axios.post('http://localhost:5000/user/signup',
           {
              name:document.getElementById('name').value,
              email:document.getElementById('email').value,
              password:document.getElementById('password').value
          
          }).then(()=>{
           window.alert("Successfull")
          })
          .catch((err)=>{
              window.alert('Error ....plz try again in some time')
          })
            
          
    }
   return (
       <div style={{width:'100%',height:'100%',margin:'0 0 0 0',zIndex:11000,fontSize:40,position:'fixed'}}>
       <div >
   <div >
       
       <div className="form_bg">
       
       
           <form >
                <h2 style={{textAlign:'center', fontSize:'30px'}}>SignUp Page</h2>

               <br/>
               <div>
                  <label style={{fontSize:30}} >UserName:</label> <input type="text" id='name' required/>
               </div>
               <br/>
               <br/>
               <div>
                  <label style={{fontSize:30}} >Email-id:</label> <input type="email" id='email' required/>
               </div>
               <br/>
               <br/>
               <div  >
                  <label style={{fontSize:30}}>Password:</label><input style ={{marginLeft:'10px'}} type="password" id='password' required />
               </div>
               <br/>
               <br/>
               <div  >
                  <label style={{fontSize:30}}> Re-Enter Password:</label><input style ={{marginLeft:'10px'}} type="password" id='repass'  required />
               </div>
               <br/>
               <br/>
               
               <div style={{marginLeft:'73%'}}>
                   <button type="submit"  onClick={postData} style={{fontSize:30}}>Register</button>
               </div>
           </form>
       </div>
   </div>
</div>
       </div>
   )
}
export default SignUp;

