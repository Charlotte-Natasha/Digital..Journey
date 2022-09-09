import React from 'react'
import award from '../assets/portfolio/awwards.png' 
// import box from '../assets/portfolio/co.png' 
// import photo from '../assets/portfolio/Photobx.png' 

const Portfolio = () => {
    return (
        <div name='portfolio' className='w-full md:h-screen bg-gradient-to-b from-black via-black to-pink-900 text-pink-50'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-900'>Portfolio</p>
                    <p className='py-6'>Check out some of my projects</p>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    <div className='shadow-md shadow-purple-600 rounded-lg'>
                        <img src={award} alt="" className='rounded-md duration-200 hover:scale-105' />
                        <div className='flex items-center justify-center'>
                            <button className='w-1/2 px-6 first-letter:py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                            <button className='w-1/2 px-6 first-letter:py-3 m-4 duration-200 hover:scale-105'>Code</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio