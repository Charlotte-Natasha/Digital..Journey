import React, { useState } from 'react';
import { HiSearch, HiOutlineDocumentText } from 'react-icons/hi';
// 👇 Import the structured project data
import { projectsData } from '../data/projectData.jsx'; 

// This helper component will show the Schema when the user clicks the button
const SchemaModal = ({ schema }) => (
    <div className="mt-4 p-3 bg-gray-900 border border-pink-700 rounded-lg text-xs text-pink-200">
        <p className="font-bold mb-1 underline">Conceptual Data Schema (Apache Format):</p>
        {schema.map((item, index) => (
            <p key={index} className="pl-2">
                - {item.field}: **{item.type}** (Encoding: {item.format})
            </p>
        ))}
    </div>
);


const Experience = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeSchemaId, setActiveSchemaId] = useState(null);

    // RAG/Retrieval Simulation Logic
    const filteredProjects = projectsData.filter(project => {
        if (searchTerm === '') return true;
        const query = searchTerm.toLowerCase();
        
        // Search across title and 'vector_tags' (keywords)
        return project.title.toLowerCase().includes(query) || 
                project.keywords.some(tag => tag.toLowerCase().includes(query));
    });

    return (
        <div name='experience' className='w-full pt-24 pb-24 bg-gradient-to-b to-black via-black from-pink-900 text-pink-50'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full'>
                
                {/* Section Header */}
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-500'>Experience & Expertise</p>
                    <p className='py-6 text-xl text-pink-200'>
                        Search my projects below to see specific skills and how I structure data (RAG Concept).
                    </p>
                </div>
                
                {/* 🎯 Skill Retrieval Search Bar (RAG Simulation) */}
                <div className='flex items-center w-full md:w-1/2 mb-10 border-b-2 border-pink-500'>
                    <HiSearch size={25} className='text-pink-300 mr-2' />
                    <input
                        type='text'
                        placeholder='Search keywords (e.g., "RAG", "Classification", "Parquet")'
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className='bg-transparent border-none w-full text-pink-100 placeholder-pink-300 focus:outline-none py-2'
                    />
                </div>

                {/* PROJECT CARDS - Displaying filtered results */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 py-8'>
                    {filteredProjects.map((project) => (
                        <div key={project.id} className='shadow-xl p-6 rounded-xl bg-pink-900/40 border border-pink-700 hover:border-pink-500 duration-300'>
                            
                            <h3 className='text-2xl font-bold text-white mb-2'>{project.title}</h3>
                            <p className='text-pink-200 mb-4 italic'>{project.subtitle}</p>
                            <p className='text-gray-300 mb-4'>{project.description}</p>

                            <div className='flex flex-wrap gap-2 text-sm mb-4'>
                                {project.keywords.map((tag, index) => (
                                    <span key={index} className='px-3 py-1 bg-pink-600 rounded-full text-xs text-white'>
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* 🎯 Schema/Apache Concept Button */}
                            <button 
                                onClick={() => setActiveSchemaId(project.id === activeSchemaId ? null : project.id)}
                                className='flex items-center text-sm font-semibold text-pink-300 hover:text-white transition-colors duration-200'
                            >
                                <HiOutlineDocumentText size={18} className='mr-1' />
                                View Data Schema Concept
                            </button>

                            {/* Schema Modal Display */}
                            {activeSchemaId === project.id && <SchemaModal schema={project.input_data_schema} />}
                        </div>
                    ))}
                    
                    {filteredProjects.length === 0 && (
                        <p className="text-pink-300 text-lg">No projects match your current search query. Try keywords like 'RAG' or 'Python'.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Experience;