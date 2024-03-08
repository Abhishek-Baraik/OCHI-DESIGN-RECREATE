import React from 'react'
import { FaArrowUp } from "react-icons/fa6";
import {motion} from 'framer-motion'
function Landingpage() {

  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.3" className='w-full h-screen bg-zinc-900 pt-10'>
      <div className='text-structure ml-20 mt-8'>
        {["We create", "eye opening", "Presentations"].map((item, index) => {
          return <div className='masker flex'>
            {index === 1 && (
              <motion.div initial={{width:0}} animate={{width: "8vw"}} transition={{ease:[0.76, 0, 0.24, 1], duration:1}} className='mr-[1vw] w-[8vw] rounded-md h-[5.5vw] top-[0.7vw] relative bg-green-400 bg-[url("https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg")] bg-cover'>
              </motion.div>
            )}
            <h1 className='uppercase text-9xl leading-[6.3vw] tracking-normal font-semibold font-["FoundersGrotesk"]'>{item}</h1>
          </div>
        })}
      </div>
      <div className='border-t-[1px] border-zinc-800 mt-40 flex justify-between items-center py-5 px-20'>
        {["For public and private companies", "From the first pitch to IPO"].map((item, index) => (
          <p className='text-md font-light leading-none tracking-tight'>{item}</p>
        ))}
        <div className='flex justify-center items-center gap-2'>
        <div className="start uppercase font-light border -[1px] rounded-full px-4 py-1 border-zinc-600 cursor-pointer">Start the project</div>
        <div className="arrow h-8 w-8 rounded-full border-[1px] border-zinc-600 flex justify-center items-center rotate-45 cursor-pointer">
          <FaArrowUp />
        </div>
        </div>
      </div>
    </div>
  )
}

export default Landingpage