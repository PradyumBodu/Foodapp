import React from 'react'
import './AppDownload.css'
import play from '../../assets/frontend_assets/play_store.png'
import ios from '../../assets/frontend_assets/app_store.png'

function AppDownload() {
  return (
    <div className='appd' id='AppDownload'>
        <h1>For Better Experience Download Tomato App</h1>
        <div className='icons'>
            <img src={play} alt="" />
            <img src={ios} alt="" />
        </div>
    </div>
  )
}

export default AppDownload