import { motion, useAnimation } from 'framer-motion'
import React, { useEffect, useState } from 'react'

function Featured() {
    const cards = [useAnimation(), useAnimation()]

    const handleHover = (index) => (
        cards[index].start({ y: "0" })
    )
    const handleHoverEnd = (index) => {
        cards[index].start({ y: "100%" })
    }
    return (
        <div className='w-full py-16 rounded-t-3xl'>
            <div className='font-[NeueMontreal] text-6xl tracking-tight w-full border-zinc-700 border-b-[1px] pb-16 px-16'>Featured projects</div>
            <div className='px-20 flex gap-10'>
                <motion.div onHoverStart={()=> handleHover(0)} onHoverEnd={() => handleHoverEnd(0)} className='cardContainer cursor-pointer h-[70vh] w-1/2 mt-20 flex relative'>
                    <h1 className='font-[NeueMontreal] overflow-hidden flex absolute z-10 leading-none tracking-tighter font-semibold text-8xl left-full -translate-x-1/2 -translate-y-1/2 top-1/2 text-[#CDEA68]'>
                        {"FYDE".split("").map((item, index) => (
                            <motion.span
                                initial={{ y: "100%" }}
                                animate={cards[0]}
                                transition={{ ease: [0.22,1,0.36,1], delay: index * .01 }}
                                className='inline-block'>
                                {item}</motion.span>
                        ))}
                    </h1>
                    <div className="card h-full w-full rounded-xl overflow-hidden">
                        <img className='w-full h-full' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                    </div>
                </motion.div>
                <motion.div onHoverStart={()=> handleHover(1)} onHoverEnd={() => handleHoverEnd(1)} className='cardContainer cursor-pointer relative h-[70vh] w-1/2 mt-20 rounded-xl flex'>
                    <h1 className='font-[NeueMontreal] flex overflow-hidden mr-10 absolute z-10 leading-none font-semibold text-8xl right-full translate-x-1/2 -translate-y-1/2 top-1/2 text-[#CDEA68]'>
                    {"VISE".split("").map((item, index) => (
                            <motion.span
                                initial={{ y: "100%" }}
                                animate={cards[1]}
                                transition={{ ease: [0.22,1,0.36,1], delay: index * .01 }}
                                className='inline-block'>
                                {item}</motion.span>
                        ))}
                    </h1>
                    <div className="card h-full w-full object-contain">
                        <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Featured