import React, { useState } from 'react'
import './CardMenu.css'
import { menu_list } from '../../assets/frontend_assets/assets'

function CardMenu({catigary,setCatigary}) {


  return (
    <div className='cardmenu'>
        <h1>Explore our menu</h1>
        <p>Choose from menu featurning a delectable array of dishes crafted with the finest ingredients and curlinary expertice. Our mission is to satisfy your cravings and elevate your dining expeeience. one deliciouus meal ata time</p>
        <div className='foodicon'>
            {menu_list.map((item,index) => {
                return(
                <div key={index} className='foodicon1'>
                    <img src={item.menu_image} alt="" onClick={()=>setCatigary(item.menu_name)} className={catigary===item.menu_name?"active":""} />
                    <p>{item.menu_name}</p>
                </div>
                );
            })}
        </div>
        <hr />
    </div>
  )
}

export default CardMenu