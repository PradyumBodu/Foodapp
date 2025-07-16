import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/frontend_assets/assets'
import {Link, useNavigate} from 'react-router-dom'
import { foodContext } from '../context/Context';

function Navbar({setSignIn}) {

    const [menu,setMenu] = useState("Home");
    const nav = useNavigate();
    const {getTotalCartAmount} = useContext(foodContext)

  return (
    <div className='navbar'>
        <div className="left-nav">
            <img onClick={()=>nav('/')} src={assets.logo} alt="" />
        </div>
        <div className="center-nav">
            <ul>
                <Link to='/' onClick={() => setMenu("Home")} className={menu === "Home" ? "active1" : "" } >Home</Link>
                <a href='#Menu' onClick={() => setMenu("Menu")} className={menu === "Menu" ? "active1" : "" } >Menu</a>
                <a href='#AppDownload' onClick={() => setMenu("Mobile")} className={menu === "Mobile" ? "active1" : "" } >Mobile</a>
                <a href='#Footer' onClick={() => setMenu("Contact")} className={menu === "Contact" ? "active1" : "" } >Contact</a>
                
            </ul>
        </div>
        <div className="right-nav">
            <img src={assets.search_icon} alt="" className='search' />
            <div className='rn'>
                <img src={assets.basket_icon} alt="" className='busket' onClick={()=>nav('/cart')}/>
                <div className={!getTotalCartAmount() ? "" : 'dot'}></div>
            </div>
            <p onClick={()=>setSignIn(true)}>Sign In</p>
        </div>
    </div>
  )
}

export default Navbar