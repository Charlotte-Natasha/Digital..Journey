import React from "react";
import three from "../assets/portfolio/three.png";
import mitch from "../assets/portfolio/mitch.png";
import code from "../assets/portfolio/co.png";
import crash from "../assets/portfolio/crashes.png";
import piston from "../assets/portfolio/piston.png";

// --- DATA PROCESSING / FEATURE ENGINEERING FOR PORTFOLIO ---
/**
 * Prépare la pile technologique pour l'analyse (transforme les chaînes en tableaux).
 * @param {Array | string} stack - La pile technologique.
 * @returns {Array} La pile technologique comme tableau de chaînes.
 */
const normalizeTechStack = (stack) => {
    if (Array.isArray(stack)) return stack;
    if (typeof stack === 'string') {
        return stack.split(/, /).map(s => s.trim());
    }
    return [];
};

/**
 * Simule un pipeline de traitement de données pour les projets.
 * Analyse le teaser et la pile technologique pour assigner un score de pertinence IA/ML.
 */
const processProjectData = (data) => {
    return data.map(project => {
        let level = 'Base (Dev)';
        let color = 'bg-pink-600';

        // Normalisation de la pile tech pour l'analyse
        const techStackArray = normalizeTechStack(project.techStack);
        
        // Combinaison et conversion en minuscules pour l'analyse
        const content = project.teaser.toLowerCase() + ' ' + techStackArray.join(' ').toLowerCase();

        // Logique d'attribution de pertinence
        if (content.includes('machine learning') || content.includes('nlp') || content.includes('prediction') || content.includes('scikit-learn')) {
            level = 'Élevée (AI/ML)';
            color = 'bg-green-600';
        } else if (content.includes('data cleaning') || content.includes('visualization') || content.includes('analysis') || content.includes('three.js')) {
            level = 'Moyenne (Analyse/3D)';
            color = 'bg-yellow-600';
        } 
        
        return {
            ...project,
            techStack: techStackArray, // Utilise le tableau normalisé
            relevanceLevel: level,
            relevanceColor: color,
        };
    });
};
// -------------------------------------------------------------------

const Portfolio = () => {
    
    // Données brutes des projets
    const rawPortfolios = [
        {
            id: 1,
            src: piston, 
            title: "Aircraft Performance and Engine Type Prediction ",
            teaser:
                "Involves data cleaning, feature selection (Lasso, Mutual Info), model training (Linear, Logistic Regression), evaluation (RMSE, R2, Accuracy, F1), and cross-validation. Forte composante de **Machine Learning**.",
            techStack: ["Python", "Scikit-learn", "Pandas", "Streamlit"],
            href: "https://colab.research.google.com/drive/1wDw6D7rXknG1pwsmiBI9JRVGiH6qlBwD#scrollTo=57bc788d",
            code: "https://github.com/Charlotte-Natasha/Airplane-Performance-and-Engine-Type-Prediction-Model",
        },
        {
            id: 2,
            src: crash, 
            title: "Aircraft Crash Data Analysis",
            teaser:
                "Project showcases data wrangling, interactive visualization, and clustering skills. Compétences en **Data Analysis** mises en avant.",
            techStack: ["Python", "Scikit-learn", "Pandas", "Streamlit"],
            href: "https://code--hub.herokuapp.com/",
            code: "https://github.com/Charlotte-Natasha/Aircraft-Crash-Data",
        },
        {
            id: 3,
            src: three, 
            title: "3D Birthday Portfolio Site",
            teaser: "Interactive portfolio using Three.js and Vite. Projet de **développement web 3D**.",
            techStack: ["React", "Three.js", "Vite"],
            href: "https://3d-birthday-site.netlify.app/",
            code: "https://github.com/Charlotte-Natasha/3D-portfolio",
        },
        {
            id: 4,
            src: code, 
            title: "Code-Hub Social Platform",
            teaser: "Code-Hub is a social platform that connects junior developers, allowing them to share resources, collaborate on projects, and support each other in their career journeys.",
            techStack: "Python, Django, PostgreSQL", // Sera normalisé
            href: "https://code--hub.herokuapp.com/",
            code: "https://github.com/Charlotte-Natasha/CodeHub",
        },
        {
            id: 5,
            src: mitch, 
            title: "Michelle's Portfolio Website",
            teaser: "Showcasing Michelle Okello's projects and skills. Projet de **développement Frontend**.",
            techStack: "React, Tailwind CSS", // Sera normalisé
            href: "https://michelleokello.netlify.app/",
            code: "https://github.com/Charlotte-Natasha/Mitch-Journey",
        },
    ];

    // Traitement des données par le pipeline simulé
    const processedPortfolios = processProjectData(rawPortfolios);


    return (
        <div
            id="portfolio"
            name="portfolio"
            className="w-full pt-16 pb-16 bg-gradient-to-b from-black via-black to-pink-900 text-pink-50"
        >
            <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full px-4 md:px-6 lg:px-8">
                <div className="pb-6 md:pb-8">
                    <p className="text-3xl md:text-4xl font-bold inline border-b-4 border-pink-500 mb-4 md:mb-6">
                        Portfolio de Projets IA & Tech
                    </p>
                    <p className="py-6 text-pink-200">
                        Découvrez mes réalisations. Le **Score de Pertinence IA** (simulé) est affiché pour mettre en lumière les projets les plus techniques.
                    </p>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {processedPortfolios.map(({ id, src, title, teaser, techStack, href, code, relevanceLevel, relevanceColor }) => (
                        <div
                            key={id}
                            className="shadow-md shadow-pink-600 rounded-lg flex flex-col h-full bg-gray-900/70 border border-pink-700 hover:border-green-500 duration-300 transform hover:scale-[1.02]" 
                        >
                            {/* === CONTENT WRAPPER: Takes all space above buttons === */}
                            <div className="p-4 flex-grow">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-semibold text-white">{title}</h3>
                                    {/* Score de Pertinence IA Visible */}
                                    <span 
                                        className={`flex-shrink-0 ml-3 px-2 py-1 text-xs font-bold rounded-full text-white ${relevanceColor}`}
                                    >
                                        {relevanceLevel}
                                    </span>
                                </div>
                                
                                {/* 🎯 Teaser/Tech Stack Wrapper: Limited Height & Overflow hidden */}
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
                                
                                {/* Image Placeholder */}
                                <div className="w-full h-40 bg-gray-800 flex items-center justify-center rounded-md mt-2">
                                    <img 
                                      src={src} alt={title} className="w-full h-40 object-cover rounded-md mt-2" />
                                </div>
                            </div>

                            {/* === BUTTONS: Pushed to the very bottom === */}
                            <div className="flex items-center justify-center border-t border-pink-700">
                                <a 
                                    href={href} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="w-1/2 p-4 text-center duration-200 hover:scale-[1.03] hover:bg-pink-700/20 font-medium"
                                >
                                    Démo
                                </a>
                                <a 
                                    href={code} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="w-1/2 p-4 text-center duration-200 hover:scale-[1.03] hover:bg-pink-700/20 border-l border-pink-700 font-medium"
                                >
                                    Code
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
