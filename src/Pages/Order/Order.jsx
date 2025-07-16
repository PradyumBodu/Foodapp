import React, { useContext } from 'react'
import './Order.css'
import { foodContext } from '../../components/context/Context'

function Order() {

  const {getTotalCartAmount} = useContext(foodContext);

  return (
    <div className='order'>
      <div className='order1'>
        <h1>Delivery Information</h1>
        <div className='inp'>
          <div className='inp1'>
            <input type="text" placeholder='First Name'/>
            <input type="text" placeholder='Last Name'/>
          </div>
          <input type="text" placeholder='Email address'/>
          <input type="text" placeholder='Street'/>
          <div className='inp1'>
            <input type="text" placeholder='City'/>
            <input type="text" placeholder='State'/>
          </div>
          <div className='inp1'>
            <input type="text" placeholder='Zip Code'/>
            <input type="text" placeholder='Country'/>
          </div>
          <input type="text" placeholder='Phone'/>
        </div>
      </div>
      <div>
        <div className='lower1'>
          <h1>Cart Totals</h1>
          <div className='padding'>
            <div className='detail'>
              <p>Subtotal</p>
              <p>{`$${getTotalCartAmount()}`}</p>
            </div>
            <hr />
            <div className='detail'>
              <p>Delivery Fee</p>
              <p>$2</p>
            </div>
            <hr />
            <div className='detail'>
              <p>Total</p>
              <p>{`$${getTotalCartAmount()+2}`}</p>
            </div>
            <hr />
            <button>PROCEED TO PAYMENT</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Order