import React, { useContext, useState } from 'react'
import './FoodItem.css'
import rating from '../../assets/frontend_assets/rating_starts.png'
import add from '../../assets/frontend_assets/add_icon_white.png'
import add1 from '../../assets/frontend_assets/add_icon_green.png'
import remove1 from '../../assets/frontend_assets/remove_icon_red.png'
import { foodContext } from '../context/Context'

function FoodItem({id,name,price,des,img}) {

    const {cart,
        addCart,
        removeCart} = useContext(foodContext)

  return (
    <div className='fooditem'>
        <div className='imgdiv'>
            <img src={img} alt="" />
        </div>  

            
        {!cart[id]?
            <div className='count'>
                <img src={add} alt="" onClick={() => addCart(id)} />
            </div> : 
            <div className='count add'>
                <img src={add1} alt="" onClick={() => addCart(id)} />
                <p>{cart[id]}</p>
                <img src={remove1} alt="" onClick={() => removeCart(id)} />
            </div>}
          
        <div className='info'>
            <div className='info1'>
                <p>{name}</p>
                <img src={rating} alt="" />
            </div>
            <p className='p'>{des}</p>
            <h1>{`$${price}`}</h1>
        </div>
    </div>
  )
}

export default FoodItem