import React from 'react'
import {motion} from 'framer-motion'
function About() {
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-0.3" className='w-full bg-[#CDEA68] rounded-t-3xl p-20'>
            <h1 className='text-black text-[3.6vw] font-[NeueMontreal] w-[80vw] leading-[4vw] tracking-tight'>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
            <div className='border-t-[1px] border-[#a5b56c] border-b-[1px] text-black h-[50vh] flex mt-10'>
                <div className='w-[45vw] mt-5 text-md'>What you can expect:</div>
                <div className='w-[17vw] flex flex-col gap-10 mt-5 tracking-tight text-base'>
                    <p>
                        We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.</p>

                        <p>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</p>
                </div>
                <div className='flex flex-col justify-center relative left-[12vw] leading-6'>
                    S:
                    <ul className='underline cursor-pointer'>
                        <li>Instagram</li>
                        <li>Behance</li>
                        <li>Facebook</li>
                        <li>LinkedIn</li>
                    </ul>
                </div>
            </div>
            <div className='flex gap-5'>
                <div className='w-1/2 mt-10'>
                    <h1 className='text-5xl text-zinc-950'>Our Approach:</h1>
                    <button className='bg-black rounded-full px-5 py-4 flex items-center gap-10 uppercase mt-7 cursor-pointer'>
                        Read More
                        <div className='circle w-2 h-2 rounded-full bg-white'></div>
                    </button>
                </div>
                <div className='w-1/2 mt-10 '>
                    <img className='rounded-2xl' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="a boy and a girl standing" />
                </div>
            </div>
        </div>
    )
}

export default About