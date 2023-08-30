import React from 'react'
import three from '../assets/portfolio/three.png' 
import mitch from '../assets/portfolio/mitch.png' 
import photo from '../assets/portfolio/Photobx.png' 

const Portfolio = () => {

    const portfolios = [
      {
        id: 1,
        src: three,
        href: "https://3d-birthday-site.netlify.app/",
        code: "https://github.com/Charlotte-Natasha/3D-portfolio",
      },
      {
        id: 2,
        src: mitch,
        href: "https://michelleokello.netlify.app/",
        code: "https://github.com/Charlotte-Natasha/Mitch-Journey",
      },
      {
        id: 3,
        src: photo,
        href: "https://photo--box.herokuapp.com/",
        code: "https://github.com/Charlotte-Natasha/PHOTOBOX",
      },
    ];

    return (
        <div id='portfolio' name='portfolio' className='w-full md:h-screen bg-gradient-to-b from-black via-black to-pink-900 text-pink-50'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-900'>Portfolio</p>
                    <p className='py-6'>Check out some of my projects</p>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

                {portfolios.map(({id, src, href, code}) => (

                <div key={id} className='shadow-md shadow-pink-600 rounded-lg'>
                    <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
                    <div className='flex items-center justify-center'>
                        <a href={href} target='blank' className='w-1/2 px-6 first-letter:py-3 m-4 duration-200 hover:scale-105'>Demo</a>
                        <a href={code} target='blank' className='w-1/2 px-6 first-letter:py-3 m-4 duration-200 hover:scale-105'>Code</a>
                    </div>
                </div>

                ))}
                </div>

            </div>
        </div>
    )
}

export default Portfolio