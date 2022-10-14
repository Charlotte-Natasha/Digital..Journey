import React from 'react'
import {MdKeyboardArrowRight} from 'react-icons/md'
import Chacha from '../assets/chacha.jpeg'
import { Link } from 'react-scroll'

const Home = () => {
    return (
        <div id="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-pink-900'>
            
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                <div className='flex flex-col justify-center h-full'>
                    <h2 className='text-3xl sm:text-6xl font-bold text-pink-200'>I'm a Full Stack Developer</h2>
                    <p className='text-pink-50 py-4 max-w-md'> I currently enjoy working on web applications with technologies like React, Tailwind, Angular, Django and Next JS</p>

                    <div>
                    <Link
                to="portfolio"
                smooth
                duration={500}
                className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-pink-500 to-black cursor-pointer"
            >
                Portfolio
                <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={25} className="ml-1" />
                </span>
            </Link>
                    </div>
                </div>
                <div>
                    <img src={Chacha} alt="my profile" className='rounded-full mx-auto w-60 md:w-full h-30 '/>
                </div>
            </div>
        </div>
    )
}

export default Home
