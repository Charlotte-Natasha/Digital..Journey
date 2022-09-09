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
                    <div>
                        <img src={award} alt="" />
                        <div>
                            <button>Demo</button>
                            <button>Code</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio