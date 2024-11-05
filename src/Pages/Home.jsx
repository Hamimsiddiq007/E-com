import React from 'react'
import Header from '../Components/Header'
import Banner from '../Components/Banner'
import ImageNew from '../Components/ImageNew'
import Newarrivals from '../Components/Newarrivals'
import NewPhone from '../Components/NewPhone'
import Footer from '../Components/Footer'


const Home = () => {
  return (
    <div>
      <Banner/>
      <ImageNew/>
      <Newarrivals/>
      <NewPhone/>
      <Footer/>
    </div>
  )
}

export default Home
