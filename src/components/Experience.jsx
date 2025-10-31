import React from 'react';

const skillsData = [
    {
        category: "DATA SCIENCE & PROG.",
        items: ["Python (Scikit-learn, Pandas, Plotly)", "Machine Learning/NLP", "Analyse de données"]
    },
    {
        category: "DÉVELOPPEMENT & OUTILS",
        items: ["React/Vite, Node.js", "Django/Flask, SQL", "Firebase/Google Cloud"]
    },
    {
        category: "COMPÉTENCES TRANSFÉRABLES",
        items: ["Rigueur Analytique", "Gestion de Projet (Agile)", "Esprit Critique"]
    }
];

// Séparation des données pour deux sections distinctes
const aviationExperience = [
    {
        company: "BlueBird Aviation",
        duration: "Mars ‘19 à Juin ‘21",
        title: "Technicienne Aéronautique",
        location: "Aéroport Wilson, Nairobi",
        tasks: [
            "Application stricte des procédures de maintenance et des réglementations (DGAC).",
            "Participation aux formations de sécurité et de maintenance.",
            "Inspections pré-vol et structurales (fuselage, ailes, moteurs).",
        ]
    },
    {
        company: "East African Air Charters",
        duration: "Janvier à Mars ‘17",
        title: "Stage (Internship)",
        location: "Aéroport Wilson, Nairobi",
        tasks: [
            "Maintenance curative, corrective et préventive (roues/freins) sur Cessna et Piper.",
            "Contrôle, test et diagnostic des équipements embarqués.",
            "Exécution des interventions selon la documentation technique (CMM).",
        ]
    },
];

const extraProfessionalActivities = [
    {
        company: "Cajigo",
        duration: "Juillet ‘23 - Jan ’25",
        title: "Responsable des médias sociaux",
        location: "En ligne (UK)",
        tasks: [
            "Automatisation de la planification de contenu pour l'efficacité opérationnelle.",
            "Rédaction et structuration de contenu LinkedIn ciblé (renforcement des compétences de reporting).",
        ]
    },
    {
        company: "GG Care",
        duration: "Août ‘23 - Déc ‘23",
        title: "Développeur Backend Junior",
        location: "En ligne (UK)",
        tasks: [
            "Développement d'interactions vocales pour IHM intuitives et critiques.",
            "Gestion d'états d'interface en temps réel pour des retours utilisateurs fiables (analogie cockpit).",
        ]
    },
];

// Le composant Experience utilise désormais les deux listes séparées.
const Experience = () => {
    
    // Fonction utilitaire pour rendre les blocs d'expérience
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
                    <p className='text-4xl font-bold inline border-b-4 border-pink-500'>Compétences & Expérience</p>
                    <p className='py-6 text-xl text-pink-200'>
                        Aperçu de mon expertise technique et de mon parcours professionnel.
                    </p>
                </div>
                
                {/* --- 1. SKILLS SECTION (COMPÉTENCES) --- */}
                <h2 className='text-3xl font-semibold text-white mb-6 border-l-4 border-pink-500 pl-3'>Compétences Clés</h2>
                <div className='grid md:grid-cols-3 gap-8 mb-16'>
                    {skillsData.map((section, index) => (
                        <div key={index} className='p-6 rounded-xl bg-pink-900/40 border border-pink-700 shadow-lg'>
                            <h3 className='text-lg font-bold text-pink-300 mb-4 uppercase tracking-wider'>{section.category}</h3>
                            <ul className='space-y-2'>
                                {section.items.map((item, i) => (
                                    <li key={i} className='flex items-start text-gray-200 text-base'>
                                        <span className='text-pink-500 mr-2'>&#9733;</span> {/* Star icon for bullet */}
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* --- 2. PROFESSIONAL EXPERIENCE SECTION (EXPÉRIENCE PROFESSIONNELLE) --- */}
                <h2 className='text-3xl font-semibold text-white mb-6 border-l-4 border-pink-500 pl-3'>Expérience Professionnelle - Hors Tech</h2>
                {renderExperienceBlocks(aviationExperience)}
                
                {/* --- 3. EXTRA-PROFESSIONAL ACTIVITIES SECTION (ACTIVITÉS EXTRA-PROFESSIONNELLES) --- */}
                <h2 className='text-3xl font-semibold text-white mt-12 mb-6 border-l-4 border-pink-500 pl-3'>Activites Extra-Professionnelle - Tech</h2>
                {renderExperienceBlocks(extraProfessionalActivities)}

            </div>
        </div>
    );
};

export default Experience;
