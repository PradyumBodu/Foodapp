import React from 'react'
import './Footer.css'
import logo from '../../assets/frontend_assets/logo.png'
import twitter from '../../assets/frontend_assets/twitter_icon.png'
import face from '../../assets/frontend_assets/facebook_icon.png'
import IN from '../../assets/frontend_assets/linkedin_icon.png'

function Footer() {
  return (
    <div className='footer' id='Footer' >
        <div className='f1'>
            <img src={logo} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim veritatis voluptatibus distinctio laboriosam consectetur soluta, voluptatem explicabo pariatur at natus, autem impedit. Qui accusantium aliquam eveniet neque, id dolore fugiat!</p>
            <div className='icon'>
                <img src={face} alt="" />
                <img src={twitter} alt="" />
                <img src={IN} alt="" />
            </div>
        </div>
        <div className='com'>
            <h1>COMPANY</h1>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className='com'>
            <h1>GET IN TOUCH</h1>
            <div className='com1'>
                <p>+91-12345-67890</p>
                <p>contact@tomato.com</p>
            </div>
        </div>
    </div>
  )
}

export default Footer