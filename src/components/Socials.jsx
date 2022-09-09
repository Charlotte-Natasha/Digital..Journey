import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const Socials = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                    Linkedin <FaLinkedin size={30}/>
                </>
            ),
            href: 'https://www.linkedin.com/in/charlotte-natasha',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                    GitHub <FaGithub size={30}/>
                </>
            ),
            href: 'https://github.com/Charlotte-Natasha',
        },
        {
            id: 3,
            child: (
                <>
                    Gmail <HiOutlineMail size={30}/>
                </>
            ),
            href: 'mailto:foo@gmail.com',
        },
        {
            id: 4,
            child: (
                <>
                    Resume <BsFillPersonLinesFill size={30}/>
                </>
            ),
            href: '/CHARLOTTENATASHAONYANGO.pdf',
            style: 'rounded-br-md',
            download: true,
        },
    ]

    return (
        <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
            <ul>
                {links.map(({id, child, download, href}) => (
                    <li key={id} className="flex justify-between items-center w-40 h-14 px-4 bg-black ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300">
                    <a href={href} className='flex justify-between items-center w-full text-pink-200' target='blank'
                    download={download}
                    >
                        {child}
                    </a>
                </li>
                ))}
            
            </ul>
        </div>
    )
}

export default Socials