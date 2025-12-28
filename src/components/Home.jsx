import React from 'react'
import {MdKeyboardArrowRight} from 'react-icons/md'
import ProfilePic from '../assets/portfolio/image.png' 
import { Link } from 'react-scroll'
import { useTranslation } from 'react-i18next'

const Home = () => {
    const { t } = useTranslation();

    return (
        <div
          name="home"
          className="w-full pt-24 pb-24 min-h-screen relative flex items-center overflow-hidden bg-gradient-to-b from-black/70 via-black/70 to-pink-900/70">
          <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            
            <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-between w-full gap-12 px-2 md:px-4 lg:px-0 relative z-10">
              
              {/* Text Section */}
              <div className="flex flex-col justify-center max-w-lg md:text-left animate-fade-in-up">
                
                {/* Animated Badge */}
                <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/50 rounded-full w-fit animate-pulse-slow">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  <span className="text-green-400 text-sm font-semibold">Available for Alternance</span>
                </div>

                {/* Title with gradient animation */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient bg-300">
                  {t('home_title')}
                </h2>

                {/* Description with stagger animation */}
                <div 
                  className="text-pink-50 text-sm sm:text-base lg:text-lg leading-relaxed mb-8 animate-fade-in-up animation-delay-200"
                  dangerouslySetInnerHTML={{ __html: t('home_description') }}
                />

                {/* Buttons Row */}
                <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-400">
                  {/* Portfolio Button */}
                  <Link
                    to="portfolio"
                    smooth
                    duration={500}
                    className="group relative inline-flex items-center rounded-xl bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 px-8 py-4 cursor-pointer text-white font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/50 overflow-hidden bg-300 animate-gradient"
                    aria-label="Go to Portfolio section"
                  >
                    {/* Shimmer effect */}
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></span>

                    <span className="relative flex items-center gap-2">
                      {t('home_button')}
                      <MdKeyboardArrowRight className="group-hover:rotate-90 transition-transform duration-300" size={25} />
                    </span>
                  </Link>

                  {/* Contact Button - Fixed to use react-scroll Link */}
                  <Link
                    to="contact"
                    smooth
                    duration={500}
                    className="group inline-flex items-center rounded-xl border-2 border-pink-500 px-8 py-4 cursor-pointer text-pink-400 font-bold transition-all duration-300 hover:bg-pink-500/10 hover:scale-105 backdrop-blur-sm"
                    aria-label="Go to Contact section"
                  >
                    Contact Me
                    <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </Link>
                </div>

                {/* Stats or Quick Info */}
                <div className="mt-8 flex flex-wrap gap-6 text-sm animate-fade-in-up animation-delay-600">
                  <div className="flex items-center gap-2 text-gray-300">
                    <span className="text-2xl">🎓</span>
                    <span>Bac+3 AI & Data Science</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <span className="text-2xl">📍</span>
                    <span>Montpellier, France</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <span className="text-2xl">✈️</span>
                    <span>Aviation Background</span>
                  </div>
                </div>
              </div>

              {/* Image Section with enhanced styling */}
              <div className="flex justify-center md:justify-end flex-shrink-0 animate-fade-in-right">
                <div className="relative group">
                  {/* Animated border glow */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 rounded-full opacity-75 group-hover:opacity-100 blur-lg group-hover:blur-xl transition-all duration-500 animate-gradient bg-300"></div>
                  
                  {/* Image */}
                  <img
                    src={ProfilePic} 
                    alt="Profile picture"
                    className="relative rounded-full w-48 sm:w-60 md:w-72 lg:w-80 h-48 sm:h-60 md:h-72 lg:h-80 object-cover border-4 border-pink-500/50 shadow-2xl shadow-pink-500/20 transition-all duration-500 group-hover:scale-105 group-hover:border-pink-400"
                    loading="lazy"
                  />
                  
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Home