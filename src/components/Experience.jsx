import React from 'react';
import { useTranslation } from "react-i18next";

const Experience = () => { 
    const { t } = useTranslation();
    
    // Get data from translations with fallbacks
    const skillsData = t('skillsData', { returnObjects: true }) || [];
    const learningData = t('learningData', { returnObjects: true }) || [];
    const softSkills = t('softSkills', { returnObjects: true }) || [];

    // Debug logs
    console.log("skillsData:", skillsData);
    console.log("learningData:", learningData);
    console.log("softSkills:", softSkills);

    return (
        <div name='experience' className='w-full min-h-screen pt-24 pb-24 bg-gradient-to-b to-black/70 via-black/70 from-pink-900/70 text-pink-50'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full'>
                
                {/* Section Header */}
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-500'>{t('skills_title')}</p> 
                    <p className='py-6 text-xl text-pink-200'>
                        {t('skills_subtitle')}
                    </p>
                </div>
                
                {/* --- 1. CORE SKILLS SECTION --- */}
                <h2 className='text-3xl font-semibold text-white mb-6 border-l-4 border-pink-500 pl-3'>{t('skills_core_header')}</h2>
                <div className='grid md:grid-cols-3 gap-8 mb-16'>
                    {Array.isArray(skillsData) && skillsData.map((section, index) => (
                        <div key={index} className='p-6 rounded-xl bg-pink-900/40 border border-pink-700 shadow-lg hover:border-pink-500 hover:shadow-pink-500/50 transition-all duration-300'>
                            <div className='flex items-center mb-4'>
                                <span className='text-3xl mr-3'>{section.icon}</span>
                                <h3 className='text-lg font-bold text-pink-300 uppercase tracking-wider'>{section.category}</h3>
                            </div>
                            <ul className='space-y-3'>
                                {Array.isArray(section.items) && section.items.map((item, i) => (
                                    <li key={i} className='flex items-start text-gray-200 text-base'>
                                        <div className='flex-shrink-0 mt-1'>
                                            <span className='text-pink-500 mr-2'>&#9733;</span>
                                        </div>
                                        <div className='flex-grow'>
                                            <span className='font-medium'>{item.name}</span>
                                            {/* Proficiency bar */}
                                            <div className='mt-1 w-full bg-gray-700 rounded-full h-1.5'>
                                                <div 
                                                    className='bg-gradient-to-r from-pink-500 to-green-500 h-1.5 rounded-full transition-all duration-500'
                                                    style={{ width: item.level }}
                                                ></div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* --- 2. CURRENTLY LEARNING SECTION --- */}
                <h2 className='text-3xl font-semibold text-white mb-6 border-l-4 border-green-500 pl-3'>{t('skills_learning_header')}</h2>
                <p className='text-pink-200 mb-6 text-lg'>{t('skills_learning_subtitle')}</p>
                
                <div className='grid md:grid-cols-2 gap-6 mb-12'>
                    {Array.isArray(learningData) && learningData.map((item, index) => (
                        <div key={index} className='p-6 rounded-xl bg-gradient-to-br from-green-900/30 to-black/50 border border-green-700/50 shadow-lg hover:border-green-500 hover:shadow-green-500/30 transition-all duration-300'>
                            <div className='flex items-start justify-between mb-3'>
                                <div className='flex items-center'>
                                    <span className='text-2xl mr-3'>{item.icon}</span>
                                    <h3 className='text-xl font-bold text-white'>{item.technology}</h3>
                                </div>
                                <span className='px-3 py-1 text-xs font-bold rounded-full bg-green-600 text-white'>
                                    {item.status}
                                </span>
                            </div>
                            
                            <p className='text-gray-300 text-sm mb-3 leading-relaxed'>{item.description}</p>
                            
                            <div className='flex items-center text-sm text-green-300'>
                                <span className='mr-2'>🎯</span>
                                <span className='font-medium'>{item.goal}</span>
                            </div>
                            
                            {/* Progress indicator */}
                            <div className='mt-4'>
                                <div className='flex justify-between text-xs text-gray-400 mb-1'>
                                    <span>{t('skills_progress')}</span>
                                    <span>{item.progress}</span>
                                </div>
                                <div className='w-full bg-gray-700 rounded-full h-2'>
                                    <div 
                                        className='bg-gradient-to-r from-green-500 to-green-300 h-2 rounded-full transition-all duration-500'
                                        style={{ width: item.progress }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* --- 3. SOFT SKILLS / METHODOLOGY --- */}
                <h2 className='text-3xl font-semibold text-white mb-6 border-l-4 border-pink-500 pl-3'>{t('skills_soft_header')}</h2>
                <div className='grid md:grid-cols-4 gap-6'>
                    {Array.isArray(softSkills) && softSkills.map((skill, index) => (
                        <div key={index} className='p-6 rounded-xl bg-pink-900/30 border border-pink-700/50 text-center hover:border-pink-500 hover:scale-105 transition-all duration-300'>
                            <div className='text-4xl mb-3'>{skill.icon}</div>
                            <h4 className='text-lg font-bold text-white mb-2'>{skill.name}</h4>
                            <p className='text-sm text-gray-300'>{skill.description}</p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Experience;