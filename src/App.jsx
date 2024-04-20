import React from 'react'
import Navbar from './components/Navbar'
import HeaderCard from './components/HeaderCard'
import VideoBar from './components/VideoBar'
import Products from './components/Products'
import Footer from './components/Footer'
import Marquee from 'react-fast-marquee'

function App() {
  return (
    <div className=' overflow-hidden bg-zinc-200'>
      <Navbar/>
      <HeaderCard/>
     
      <VideoBar/>
      <Products/>
      <Footer/>
    </div>
  )
}

export default App