import React from 'react'

function Cards() {
    return (
        <div className='w-full h-screen bg-zinc-100 flex items-center gap-5 px-16' >
            <div className='w-1/2 h-[50vh] cardContainer relative'>
                <div className='card rounded-xl h-full w-full bg-[#004D43] flex items-center justify-center'>
                    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                </div>
                <button className='bg-transparent border-[1px] font-[NeueMontreal] border-[#CDEA68] text-[#CDEA68] py-1 px-2 rounded-full absolute bottom-6 left-6'>©2019-2022</button>
            </div>
            <div className='cardContainer w-1/2 h-[50vh] flex gap-5'>
                <div className="card rounded-xl w-1/2 h-full bg-[#212121] items-center flex justify-center relative">
                    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                    <button className='bg-transparent border-[1px] font-[NeueMontreal] border-zinc-300 py-1 px-2 rounded-full absolute bottom-6 left-6'>RATING 5.0 ON CLUTCH</button>
                </div>
                <div className="card rounded-xl w-1/2 bg-[#212121] items-center flex justify-center relative">
                    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                    <button className='bg-transparent border-[1px] font-[NeueMontreal] border-zinc-300 py-1 px-2 rounded-full absolute bottom-6 left-6'>BUSINESS BOOTCAMP ALUMNI</button>
                </div>
            </div>
        </div>
    )
}

export default Cards