import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {

  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-10 bg-[#004D43] pt-32 pb-32 rounded-t-xl'>
        <div className='whitespace-nowrap overflow-hidden border-zinc-300 border-t-2 border-b-2 flex mr-10'>
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:15}} className='font-["FoundersGrotesk"] font-semibold uppercase text-[27vw] leadiing-none -mt-48 -mb-36'>WE ARE OCHI WE ARE OCHI</motion.h1>
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:15}} className='font-["FoundersGrotesk"] font-semibold uppercase text-[27vw] leadiing-none -mt-48 -mb-36'>WE ARE OCHI WE ARE OCHI</motion.h1>
        </div>
    </div>
  )
}

export default Marquee