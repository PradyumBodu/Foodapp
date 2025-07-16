import React, { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Login from './components/Login/Login'
import Cart from './Pages/Cart/Cart'
import Footer from '../src/components/Footer/Footer'
import Order from './Pages/Order/Order'

function App() {
  
  const [signIn,setSignIn] = useState(false);

  return (
    <div className='app'>
      {signIn ? <Login setSignIn={setSignIn} />:<></>}
      <div>
        <Navbar setSignIn={setSignIn} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<Order />} />
        </Routes>
        <Footer />
      </div>
    </div>
  )
}

export default App