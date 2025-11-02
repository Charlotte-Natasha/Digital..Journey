import React from 'react';
import { useTranslation } from "react-i18next";

const Experience = () => { 
    const { t } = useTranslation();
    
    // Get data from translations
    const skillsData = t('skillsData', { returnObjects: true });
    const extraProfessionalActivities = t('extraProfessionalActivities', { returnObjects: true });
    const aviationExperience = t('aviationExperience', { returnObjects: true });

    // Utility function to render experience blocks
    const renderExperienceBlocks = (data) => ( 
        <div className='space-y-12'>
            {data.map((job, index) => (
                <div key={index} className='p-6 rounded-xl bg-pink-900/40 border border-pink-700 shadow-xl transition-all duration-300 hover:border-pink-500'>
                    <div className='flex justify-between items-start flex-wrap mb-2'>
                        <h3 className='text-2xl font-bold text-white'>{job.company}</h3>
                        <p className='text-md font-medium text-pink-300 italic'>{job.duration}</p>
                    </div>
                    
                    <div className='text-pink-200 mb-4'>
                        <p className='font-semibold'>{job.title}</p>
                        <p className='text-sm italic'>{job.location}</p>
                    </div>
                    
                    <ul className='list-disc pl-5 space-y-2 text-gray-300'>
                        {job.tasks.map((task, i) => (
                            <li key={i} className='text-base'>{task}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );

    return (
        <div name='experience' className='w-full min-h-screen pt-24 pb-24 bg-gradient-to-b to-black via-black from-pink-900 text-pink-50'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full'>
                
                {/* Section Header */}
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-500'>{t('exp_title')}</p> 
                    <p className='py-6 text-xl text-pink-200'>
                        {t('exp_subtitle')}
                    </p>
                </div>
                
                {/* --- 1. SKILLS SECTION --- */}
                <h2 className='text-3xl font-semibold text-white mb-6 border-l-4 border-pink-500 pl-3'>{t('exp_skills_header')}</h2>
                <div className='grid md:grid-cols-3 gap-8 mb-16'>
                    {skillsData.map((section, index) => (
                        <div key={index} className='p-6 rounded-xl bg-pink-900/40 border border-pink-700 shadow-lg'>
                            <h3 className='text-lg font-bold text-pink-300 mb-4 uppercase tracking-wider'>{section.category}</h3>
                            <ul className='space-y-2'>
                                {section.items.map((item, i) => (
                                    <li key={i} className='flex items-start text-gray-200 text-base'>
                                        <span className='text-pink-500 mr-2'>&#9733;</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* --- 2. EXTRA-PROFESSIONAL ACTIVITIES SECTION --- */}
                <h2 className='text-3xl font-semibold text-white mb-6 border-l-4 border-pink-500 pl-3'>{t('exp_extracurricular_header')}</h2>
                {renderExperienceBlocks(extraProfessionalActivities)}
                
                {/* --- 3. PROFESSIONAL EXPERIENCE SECTION --- */}
                <h2 className='text-3xl font-semibold text-white mt-12 mb-6 border-l-4 border-pink-500 pl-3'>{t('exp_aviation_header')}</h2>
                {renderExperienceBlocks(aviationExperience)}

            </div>
        </div>
    );
};

export default Experience;