import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { useLanguage } from "../translation/language/LanguageContext.jsx";
import { useTranslation } from "react-i18next";

const NavBar = () => {
    const [nav, setNav] = useState(false);
    const [langDropdown, setLangDropdown] = useState(false);

    const { language, changeLanguage } = useLanguage();
    const { t, i18n } = useTranslation(); // ✅ Add i18n here

    const links = [
        { id: 1, link: "home", translationKey: "nav_home" },
        { id: 2, link: "about", translationKey: "nav_about" },
        { id: 3, link: "portfolio", translationKey: "nav_portfolio" },
        { id: 4, link: "experience", translationKey: "nav_experience" },
        { id: 5, link: "contact", translationKey: "nav_contact" },
    ];

    const toggleLanguage = (lang) => {
        console.log("Toggling language to:", lang);
        changeLanguage(lang.toLowerCase());
    };

    return (
        <div className="flex justify-between items-center w-full h-20 px-4 text-pink-300 bg-black fixed z-50">
            <div>
                <h1 className="text-5xl font-signature ml-2 tracking-wide">Charlotte Onyango</h1>
            </div>

            {/* DESKTOP MENU */}
            <ul className="hidden md:flex items-center">
                {links.map(({ id, link, translationKey }) => (
                    <li
                        key={id}
                        className="px-4 cursor-pointer capitalize font-medium text-pink-500 hover:scale-105 duration-200"
                    >
                        <Link to={link} smooth duration={800} offset={-96}>
                            {t(translationKey)}
                        </Link>
                    </li>
                ))}

                {/* Language Dropdown */}
                <li className="relative px-4 cursor-pointer font-medium text-pink-500 group">
                    <button
                        onClick={() => setLangDropdown(!langDropdown)}
                        className="px-2 py-1 border border-pink-500 rounded hover:bg-pink-700"
                    >
                        {language.toUpperCase()}
                    </button>

                    {langDropdown && (
                        <ul className="absolute right-0 mt-2 bg-black border border-pink-700 rounded w-20 z-50">
                            <li
                                className="px-4 py-2 hover:bg-pink-700 cursor-pointer"
                                onClick={() => toggleLanguage("EN")}
                            >
                                EN
                            </li>
                            <li
                                className="px-4 py-2 hover:bg-pink-700 cursor-pointer"
                                onClick={() => toggleLanguage("FR")}
                            >
                                FR
                            </li>
                        </ul>
                    )}
                </li>
            </ul>

            {/* MOBILE MENU TOGGLE */}
            <div
                onClick={() => setNav(!nav)}
                className="cursor-pointer pr-4 z-10 text-pink-500 md:hidden"
            >
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {/* MOBILE MENU */}
            {nav && (
                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-pink-800 text-pink-500">
                    {links.map(({ id, link, translationKey }) => (
                        <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl">
                            <Link
                                onClick={() => setNav(false)}
                                to={link}
                                smooth
                                duration={800}
                                offset={-96}
                            >
                                {t(translationKey)}
                            </Link>
                        </li>
                    ))}

                    {/* Mobile Language Switch */}
                    <li className="py-6 text-3xl">
                        <button
                            onClick={() => toggleLanguage(language === "en" ? "FR" : "EN")}
                            className="px-4 py-2 border border-pink-500 rounded hover:bg-pink-700"
                        >
                            {language === "en" ? "Français" : "English"}
                        </button>
                    </li>
                </ul>
            )}
        </div>
    );
};

export default NavBar;