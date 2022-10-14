import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import reactImage from '../assets/react.png'
import javascript from '../assets/javascript.png'
import tailwind from '../assets/tailwind.png'
import github from '../assets/github.png'
import angular from '../assets/angular.png'
import nextjs from '../assets/nextjs.png'
import django from '../assets/django.png'


const Experience = () => {

    const lang = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500',
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500',
        },
        {
            id: 3,
            src: javascript,
            title: 'Javascript',
            style: 'shadow-yellow-500',
        },
        {
            id: 4,
            src: reactImage,
            title: 'React',
            style: 'shadow-blue-600',
        },
        {
            id: 5,
            src: tailwind,
            title: 'TailwindCSS',
            style: 'shadow-sky-400',
        },
        {
            id: 6,
            src: github,
            title: 'GitHub',
            style: 'shadow-gray-500',
        },
        {
            id: 7,
            src: angular,
            title: 'AngularJS',
            style: 'shadow-orange-600',
        },
        {
            id: 8,
            src: nextjs,
            title: 'Next JS',
            style: 'shadow-white',
        },
        {
            id: 9,
            src: django,
            title: 'Django',
            style: 'shadow-green-400',
        },
    ]

    return (
        <div id="experience" className='w-full h-screen bg-gradient-to-b from-pink-900 to-black text-pink-50'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-black p-2' >Experience</p>
                    <p className='py-6'>These are some of the technologies that I have worked with.</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 sm:px-0'>

                {
                    lang.map(({id, src, title, style}) => (
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                        <img src={src} alt="" className='w-20 mx-auto'/>
                        <p className='mt-4'>{title}</p>
                    </div>
                    ))
                }

                    
                </div>
            </div>
        </div>
    )
}

export default Experience