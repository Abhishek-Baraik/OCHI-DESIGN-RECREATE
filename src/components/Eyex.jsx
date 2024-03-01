import React, { useEffect, useState } from 'react'


function Eyex() {
    const [rotate, setRotate] = useState(0)

    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            let mouseX = e.clientX
            let mouseY = e.clientY

            let deltaX = mouseX - window.innerWidth / 2;
            let deltaY = mouseY - window.innerHeight / 2;

            var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setRotate(angle - 180)
        })
    }, [])

    return (
        <div className='w-full h-screen eyes overflow-hidden'>
            <div data-scroll data-scroll-speed="-.8" className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
                <div className='absolute flex gap-5 left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%]'>
                    <div className=' flex items-center justify-center rounded-full h-[15vw] w-[15vw] bg-zinc-100'>
                        <div className='w-2/3 h-2/3 bg-[#212121] rounded-full relative text-white'>
                            <span className=' absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] font-[NeueMontreal]'>PLAY</span>
                            <div style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }} className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] line h-10 w-full">
                                <div className='w-5 h-5 rounded-full bg-zinc-100'></div>
                            </div>
                        </div>
                    </div>
                    <div className=' flex items-center justify-center rounded-full h-[15vw] w-[15vw] bg-zinc-100'>
                        <div className='w-2/3 h-2/3 bg-[#212121] rounded-full relative'>
                            <span className=' absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] font-[NeueMontreal]'>PLAY</span>
                            <div style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }} className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[-50%] line h-10 w-full">
                                <div className='w-5 h-5 rounded-full bg-zinc-100'></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Eyex