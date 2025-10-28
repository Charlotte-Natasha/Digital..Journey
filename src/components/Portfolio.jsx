import React from "react";
import three from "../assets/portfolio/three.png";
import mitch from "../assets/portfolio/mitch.png";
import code from "../assets/portfolio/co.png";
import crash from "../assets/portfolio/crashes.png";
import perfomance from "../assets/portfolio/perfomance.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: perfomance,
      title: "Aircraft Performance and Engine Type Prediction ",
      teaser:
        "Involves data cleaning, feature selection (Lasso, Mutual Info), model training (Linear, Logistic Regression), evaluation (RMSE, R2, Accuracy, F1), and cross-validation.",
      techStack: ["Python", "Scikit-learn", "Pandas", "Streamlit"],
      href: "https://colab.research.google.com/drive/1wDw6D7rXknG1pwsmiBI9JRVGiH6qlBwD#scrollTo=57bc788d",
      code: "https://github.com/Charlotte-Natasha/Airplane-Performance-and-Engine-Type-Prediction-Model",
    },
    {
      id: 2,
      src: crash,
      title: "Aircraft Crash Data Analysis",
      teaser:
        "Project showcases data wrangling, interactive visualization, and clustering skills.",
      techStack: ["Python", "Scikit-learn", "Pandas", "Streamlit"],
      href: "https://code--hub.herokuapp.com/",
      code: "https://github.com/Charlotte-Natasha/Aircraft-Crash-Data",
    },
    {
      id: 3,
      src: three,
      title: "3D Birthday Portfolio Site",
      teaser: "Interactive portfolio using Three.js and Vite.",
      techStack: ["React", "Three.js", "Vite"],
      href: "https://3d-birthday-site.netlify.app/",
      code: "https://github.com/Charlotte-Natasha/3D-portfolio",
    },
    {
      id: 4,
      src: code,
      title: "3D Birthday Site",
      teaser: "",
      techStack: "",
      href: "https://code--hub.herokuapp.com/",
      code: "https://github.com/Charlotte-Natasha/CodeHub",
    },
    {
      id: 5,
      src: mitch,
      title: "Personal Portfolio Website",
      teaser: "",
      techStack: "",
      href: "https://michelleokello.netlify.app/",
      code: "https://github.com/Charlotte-Natasha/Mitch-Journey",
    },
  ];

  return (
    <div
      id="portfolio"
      name="portfolio"
      className="w-full pt-16 pb-16 bg-gradient-to-b from-black via-black to-pink-900 text-pink-50"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full px-4 md:px-6 lg:px-8">
        <div className="pb-6 md:pb-8">
          <p className="text-3xl md:text-4xl font-bold inline border-b-4 border-pink-900 mb-4 md:mb-6">
            Portfolio
          </p>
          <p className="py-6">Check out some of my projects</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, title, teaser, techStack, href, code }) => (
    <div
        key={id}
        // Uniform height management
        className="shadow-md shadow-pink-600 rounded-lg flex flex-col h-full" 
    >
        {/* === CONTENT WRAPPER: Takes all space above buttons === */}
        <div className="p-4 flex-grow">
            <h3 className="text-xl font-semibold mb-1">{title}</h3>
            
            {/* 🎯 Teaser/Tech Stack Wrapper: Limited Height & Overflow hidden */}
            <div className="h-20 mb-3 overflow-hidden"> 
                <p className="text-sm text-gray-300">{teaser}</p> 

                <div className="flex flex-wrap gap-2 mt-2">
                    {/* ... techStack mapping ... */}
                </div>
            </div>
            
            <img src={src} alt={title} className="rounded-md duration-200 hover:scale-105" />
        </div>

        {/* === BUTTONS: Pushed to the very bottom === */}
        <div className="flex items-center justify-center border-t border-pink-700">
            <a 
                href={href} 
                target="_blank" 
                rel="noopener noreferrer" // Added
                className="w-1/2 p-4 text-center duration-200 hover:scale-105 hover:bg-pink-700/20"
            >
                Demo
            </a>
            <a 
                href={code} 
                target="_blank" 
                rel="noopener noreferrer" // Added
                className="w-1/2 p-4 text-center duration-200 hover:scale-105 hover:bg-pink-700/20 border-l border-pink-700"
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
