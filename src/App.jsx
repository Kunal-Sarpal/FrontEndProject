import React from 'react'
import Navbar from './components/Navbar'
import HeaderCard from './components/HeaderCard'
import VideoBar from './components/VideoBar'
import Products from './components/Products'
import Footer from './components/Footer'

function App() {
  return (
    <div className='md:px-20 py-4 overflow-hidden'>
      <Navbar/>
      <HeaderCard/>
      <VideoBar/>
      <Products/>
      <Footer/>
    </div>
  )
}

export default App