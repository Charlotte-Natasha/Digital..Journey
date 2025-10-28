import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: "home",
        },
        {
            id: 2,
            link: "about",
        },
        {
            id: 3,
            link: "portfolio",
        },
        {
            id: 4,
            link: "experience",
        },
        {
            id: 5,
            link: "contact",
        },
    ];

    return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-pink-300 bg-black fixed z-50">
        <div>
        {/* Your Name/Signature Element */}
        <h1 className="text-5xl font-signature ml-2 tracking-wide">Charlotte Onyango</h1>
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
            <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-pink-500 hover:scale-105 duration-200"
            >
            {/* 👇 UPDATED: duration and offset added */}
            <Link to={link} smooth duration={800} offset={-96}>
                {link}
            </Link>
            </li>
        ))}
        </ul>

        {/* ... (Mobile toggle button) ... */}
        <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-pink-500 md:hidden"
        >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {/* MOBILE MENU */}
        {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-pink-800 text-pink-500">
            {links.map(({ id, link }) => (
            <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
                {/* 👇 UPDATED: duration and offset added for mobile links */}
                <Link
                    onClick={() => setNav(!nav)}
                    to={link}
                    smooth
                    duration={800}
                    offset={-96} 
                >
                    {link}
                </Link>
            </li>
            ))}
        </ul>
        )}
    </div>
    );
};

export default NavBar;