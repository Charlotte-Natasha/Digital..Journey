import React from 'react'

const Navbar = () => {

    const links = [
        {
            id: 1,
            link: 'home'
        },

        {
            id: 2,
            link: 'About'
        },

        {
            id: 3,
            link: 'Portfolio'
        },

        {
            id: 4,
            link: 'Experience'
        },

        {
            id: 5,
            link: 'Contact'
        }

    ]
        

    return (
        <div className='flex justify-between items-center w-full h-20 bg-black text-pink-900 fixed px-4'>
            <div>
                <h1 className='text-5xl font-signature ml-2'>Charlotte</h1>
            </div>

            {links.map(({id, link}) => (
                <ul className='flex'>
                <li key={id} className='px-4 cursor-pointer capitalize font-medium text-pink-500 hover:scale-105 duration-200'>{link}</li>
            </ul>
            ))}

        </div>
    )
}

export default Navbar