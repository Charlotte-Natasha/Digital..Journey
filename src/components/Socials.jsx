import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/hi'

const Socials = () => {
    return (
        <div className='flex flex-col top-[35%] left-0 fixed'>
            <ul>
            <li className='flex justify-between items-center w-40 h-14 px-4 bg-black ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300'>
                <a href="https://www.linkedin.com/in/charlotte-natasha" className='flex justify-between items-center w-full text-pink-200' target='blank'>
                    <>
                        Linkedin <FaLinkedin size={30}/>
                    </>
                </a>
            </li>
            </ul>
        </div>
    )
}

export default Socials