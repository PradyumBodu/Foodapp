import {useState,React} from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import CardMenu from '../../components/CardMenu/CardMenu'
import FoodList from '../../components/FoodList/FoodList'
import AppDownload from '../../components/AppDownload/AppDownload'

function Home() {

  const [catigary,setCatigary] = useState("All")

  return (
    <>
      <div className='home'>
          <Header />
          <CardMenu catigary={catigary} setCatigary={setCatigary} />
          <FoodList catigary={catigary} />
          <AppDownload />
      </div>
    </>
  )
}

export default Home