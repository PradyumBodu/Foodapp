import React, { useContext } from 'react'
import './FoodList.css'
import { foodContext } from '../context/Context'
import FoodItem from '../FoodItem/FoodItem'

function FoodList({catigary}) {

  const {food_list} = useContext(foodContext)

  return (
    <div className='foodlist' id='Menu' >
        <h1>Top dishes near you</h1>
        <div className='foods'>
            {food_list.map((item,index)=>{ 
              if(catigary === "All"  || catigary === item.category){
              return  <FoodItem key={index} id={item._id} name={item.name} price={item.price} des={item.description} img={item.image} />
              }
              
            })}
        </div>
    </div>
  )
}

export default FoodList