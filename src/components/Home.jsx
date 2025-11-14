import React from 'react'
import {MdKeyboardArrowRight} from 'react-icons/md'
import ProfilePic from '../assets/portfolio/prof.jpg' 
import { Link } from 'react-scroll'
import { useTranslation } from 'react-i18next'

const Home = () => {
    const { t } = useTranslation();

    return (
        <div
          name="home"
          className="w-full pt-24 pb-24 h-screen relative flex items-center overflow-hidden bg-gradient-to-b from-black via-black to-pink-900">
          <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            
            <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-between w-full gap-8 px-2 md:px-4 lg:px-0 relative z-10">
              {/* Text Section */}
              <div className="flex flex-col justify-center max-w-lg md:text-left">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-200 mb-6">
                  {t('home_title')}
                </h2>
                <p 
                  className="text-pink-50 text-sm sm:text-base leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: t('home_description') }}
                />

                <div className="mt-8">
                  <Link
                    to="portfolio"
                    smooth
                    duration={500}
                    className="group inline-flex items-center rounded-md bg-gradient-to-r from-pink-500 to-black px-6 py-3 cursor-pointer text-white font-semibold transition-transform duration-300 hover:scale-105"
                    aria-label="Go to Portfolio section"
                  >
                    {t('home_button')}
                    <span className="ml-2 group-hover:rotate-90 transition-transform duration-300">
                      <MdKeyboardArrowRight size={25} />
                    </span>
                  </Link>
                </div>
              </div>

              {/* Image Section */}
              <div className="flex justify-center md:justify-end flex-shrink-0">
                <img
                  src={ProfilePic} 
                  alt="Profile picture"
                  className="rounded-full w-48 sm:w-60 md:w-72 lg:w-80 h-48 sm:h-60 md:h-72 lg:h-80 object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
    )
}

export default Home