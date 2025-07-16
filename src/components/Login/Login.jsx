import React, { useState } from 'react'
import './Login.css'
import cross from '../../assets/frontend_assets/cross_icon.png'

function Login({setSignIn}) {

    const [current,setCurrent] = useState("Sign Up")

  return (
    <div className='login'>
        <div className='login1'>
            <div className='login-header'>
                <h2>{current}</h2>
                <img onClick={()=>setSignIn(false)} src={cross} alt="" />
            </div>
            <div className='input'>
                {current==='Sign Up'? 
                <input type="text" placeholder='Your Name' required/>
                 : <></>}
                <input type="email" placeholder='Your Email' required/>
                <input type="password" placeholder='Password' required/>
                <button>{current === 'Sign Up'?'Create New Account' : "Login"}</button>
            </div>
            <div className='last'>  
            {current === "Sign Up"? <p>Already I have a account?<span onClick={()=>setCurrent("LogIn")}>Click here</span></p> :
             <p>Create a new account?<span onClick={()=>setCurrent("Sign Up")}>Click here</span></p> }
            </div>
        </div>
    </div>
  )
}

export default Login