import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Landingpage from './components/Landingpage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyex from './components/Eyex'
import Featured from './components/Featured'
import Cards from './components/Card/Cards'
import Footer from './components/Footer/Footer'
import LocomotiveScroll from 'locomotive-scroll';

function App() {

  const locomotiveScroll = new LocomotiveScroll();
  
  return (
    <div className='w-full min-h-screen bg-zinc-900 text-white '>
     <Navbar/>
     <Landingpage/>
     <Marquee/>
     <About/>
     <Eyex/>
     <Featured/>
     <Cards/>
     <Footer/>
    </div>
  )
}

export default App
