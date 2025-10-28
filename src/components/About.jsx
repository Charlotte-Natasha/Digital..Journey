import React from 'react';
// Import the hook
import { useTranslation } from 'react-i18next'; 

const About = () => {
    // Call the hook to get the 't' function (for translate) and 'i18n' object
    const { t, i18n } = useTranslation();

    // Function to switch the language
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
    <div name='about' className='w-full pt-8 pb-8 bg-gradient-to-b from-pink-900 to-black text-pink-50 flex flex-col justify-center items-center'>
        
        {/* === LANGUAGE SWITCHER BUTTONS (Optional) === */}
        <div className="absolute top-4 right-4 space-x-2">
            <button onClick={() => changeLanguage('fr')} className={i18n.language === 'fr' ? 'font-bold' : ''}>FR</button>
            <span>/</span>
            <button onClick={() => changeLanguage('en')} className={i18n.language === 'en' ? 'font-bold' : ''}>EN</button>
        </div>
        {/* =========================================== */}
        
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full'>
            <div className='pb-4'>
                {/* Use t('key') to display the translated text */}
                <p className='text-4xl font-bold inline border-b-4 border-black'>{t('about_title')}</p>
            </div>

            {/* Apply the same logic to all paragraphs */}
            <p className='text-lg mt-8'>{t('about_paragraph_1')}</p>

            <br />

            <p className='text-lg'>{t('about_paragraph_2')}</p>

            <br />

            <p className='text-lg'>{t('about_paragraph_3')}</p>
        </div>
    </div>
    )
}

export default About