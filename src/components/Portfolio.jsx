import React from "react";
import three from "../assets/portfolio/three.png";
import mitch from "../assets/portfolio/mitch.png";
import code from "../assets/portfolio/co.png";
import mood from "../assets/portfolio/Screen.png";
import crash from "../assets/portfolio/crashes.png";
import piston from "../assets/portfolio/piston.png";
import akothImage from "../assets/portfolio/Akoth.png";
import { useTranslation } from "react-i18next";

const normalizeTechStack = (stack) => {
    if (Array.isArray(stack)) return stack;
    if (typeof stack === 'string') {
        return stack.split(/, /).map(s => s.trim());
    }
    return [];
};

const processProjectData = (data) => {
    return data.map(project => {
        let level = 'Base (Dev)';
        let color = 'bg-pink-600';
        
        const techStackArray = normalizeTechStack(project.techStack);
        const content = project.teaser.toLowerCase() + ' ' + techStackArray.join(' ').toLowerCase();

        if (content.includes('machine learning') || content.includes('nlp') || content.includes('prediction') || content.includes('scikit-learn') || content.includes('rag') || content.includes('gemini')) {
            level = 'High (AI/ML)'; 
            color = 'bg-pink-600';
        } else if (content.includes('data cleaning') || content.includes('visualization') || content.includes('analysis') || content.includes('three.js')) {
            level = 'Medium (Analysis/3D)'; 
            color = 'bg-yellow-600';
        } 
        
        return {
            ...project,
            techStack: techStackArray, 
            relevanceLevel: level,
            relevanceColor: color,
        };
    });
};

const Portfolio = () => {
    const { t } = useTranslation();
    
    const rawPortfolios = [
        {
            id: 1, 
            src: akothImage, 
            title: t('portfolio.projects.akoth.title'),
            teaser: t('portfolio.projects.akoth.teaser'),
            techStack: ["Gemini API", "LangChain", "Streamlit", "ChromaDB", "Python", "RAG"],
            href: "https://akoth-the-wildlife-advisor.streamlit.app/", 
            code: "https://github.com/Charlotte-Natasha/Akoth-Mara-Advisor", 
        },
        {
            id: 2,
            src: crash, 
            title: t('portfolio.projects.crash.title'),
            teaser: t('portfolio.projects.crash.teaser'),
            techStack: ["Python", "Scikit-learn", "Pandas", "Streamlit"],
            href: "https://code--hub.herokuapp.com/",
            code: "https://github.com/Charlotte-Natasha/Aircraft-Crash-Data",
        },
        {
            id: 3,
            src: mood, 
            title: t('portfolio.projects.mood.title'),
            teaser: t('portfolio.projects.mood.teaser'),
            techStack: ["React/Vite", "Firebase", "Tailwind CSS"],
            href: "https://mooodmatch.netlify.app/",
            code: "https://github.com/Charlotte-Natasha/MoodMatch",
        },
        {
            id: 4,
            src: three, 
            title: t('portfolio.projects.three.title'),
            teaser: t('portfolio.projects.three.teaser'),
            techStack: ["React", "Three.js", "Vite"],
            href: "https://3d-birthday-site.netlify.app/",
            code: "https://github.com/Charlotte-Natasha/3D-portfolio",
        },
        {
            id: 5,
            src: code, 
            title: t('portfolio.projects.codehub.title'),
            teaser: t('portfolio.projects.codehub.teaser'),
            techStack: ["Python", "Django", "PostgreSQL"],
            href: "https://code--hub.herokuapp.com/",
            code: "https://github.com/Charlotte-Natasha/CodeHub",
        },
        {
            id: 6,
            src: mitch, 
            title: t('portfolio.projects.michelle.title'),
            teaser: t('portfolio.projects.michelle.teaser'),
            techStack: ["React", "Tailwind CSS"],
            href: "https://michelleokello.netlify.app/",
            code: "https://github.com/Charlotte-Natasha/Mitch-Journey",
        },
    ];

    const processedPortfolios = processProjectData(rawPortfolios);

    return (
        <div
            id="portfolio"
            name="portfolio"
            className="w-full pt-16 pb-16 bg-gradient-to-b from-black/70 via-black/70 to-pink-900/70 text-pink-50/70"
        >
            <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full px-4 md:px-6 lg:px-8">
                <div className="pb-6 md:pb-8">
                    <p className="text-3xl md:text-4xl font-bold inline border-b-4 border-pink-500 mb-4 md:mb-6">
                        {t('portfolio.title')}
                    </p>
                    <p className="py-6 text-pink-200">
                        {t('portfolio.subtitle')}
                    </p>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {processedPortfolios.map(({ id, src, title, teaser, techStack, href, code, relevanceLevel, relevanceColor }) => (
                        <div
                            key={id}
                            className="shadow-md shadow-pink-600 rounded-lg flex flex-col h-full bg-gray-900/70 border border-pink-700 hover:border-green-500 duration-300 transform hover:scale-[1.02]" 
                        >
                            <div className="p-4 flex-grow">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-semibold text-white">{title}</h3>
                                    <span 
                                        className={`flex-shrink-0 ml-3 px-2 py-1 text-xs font-bold rounded-full text-white ${relevanceColor}`}
                                    >
                                        {relevanceLevel}
                                    </span>
                                </div>
                                
                                <div className="mb-3"> 
                                    <p className="text-sm text-gray-300 italic">{teaser}</p> 

                                    <div className="flex flex-wrap gap-2 mt-3">
                                        {Array.isArray(techStack) && techStack.map((tech, i) => (
                                            <span key={i} className="px-2 py-0.5 text-xs bg-pink-700 rounded-full text-white font-medium">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                
                                <div className="w-full h-40 bg-black flex items-center justify-center rounded-md mt-2">
                                    <img 
                                        src={src} alt={title} className="w-full h-40 object-cover rounded-md mt-2" />
                                </div>
                            </div>

                            <div className="flex items-center justify-center border-t border-pink-700">
                                <a 
                                    href={href} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="w-1/2 p-4 text-center duration-200 hover:scale-[1.03] hover:bg-pink-700/20 font-medium"
                                >
                                    {t('portfolio.demo')}
                                </a>
                                <a 
                                    href={code} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="w-1/2 p-4 text-center duration-200 hover:scale-[1.03] hover:bg-pink-700/20 border-l border-pink-700 font-medium"
                                >
                                    {t('portfolio.code')}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;