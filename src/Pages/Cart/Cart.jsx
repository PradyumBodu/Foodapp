import React, { useContext } from 'react'
import './Cart.css'
import { foodContext } from '../../components/context/Context'
import cross from '../../assets/frontend_assets/cross_icon.png'
import { Link } from 'react-router-dom'


function Cart() {

  const {food_list,cart,setCart,getTotalCartAmount} = useContext(foodContext);

  return (
    <div className='cart'>
        <div className='cartitms'>
          <p>Iteams</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
          <hr />
        <div className='items'>
          {food_list.map((item,index)=>{
            if(cart[item._id]>0){
              return(
                <div key={item._id}>
                <div className='cartitm'>
                  <img className='img' src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>{`$${item.price}`}</p>
                  <p>{cart[item._id]}</p>
                  <p>{`$${cart[item._id]*item.price}`}</p>
                  <div className='close'>
                  <img className='close1' src={cross} alt="" onClick={()=>setCart((prev)=>({...prev,[item._id]:0}))} />
                  </div>
                </div>
                <hr />
                </div>
              );
            }
          })}
        </div>
      
      <div className='lower'>
        <div className='lower1'>
          <h1>Cart Totals</h1>
          <div className='padding'>
            <div className='detail'>
              <p>Subtotal</p>
              <p>{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className='detail'>
              <p>Delivery Fee</p>
              <p>$2</p>
            </div>
            <hr />
            <div className='detail'>
              <p>Total</p>
              <p>{getTotalCartAmount()+2}</p>
            </div>
            <hr />
            <Link to={'/order'}><button>PROCEED TO CHECKOUT</button></Link>
          </div>
        </div>
        <div className='del'>
          <p>If you have a promo code,Enter it here</p>
          <div className='delivery'>
            <input type="text" placeholder='promo code'/>
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart