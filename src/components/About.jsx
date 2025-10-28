import React from 'react'

const About = () => {
    return (
    // **CHANGE 1: Reduced Vertical Padding (pt-16 pb-16 -> pt-8 pb-8)**
    <div name='about' className='w-full pt-8 pb-8 bg-gradient-to-b from-pink-900 to-black text-pink-50 flex flex-col justify-center items-center'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full'>
            {/* **CHANGE 2: Reduced Padding Below Title (pb-8 -> pb-4)** */}
            <div className='pb-4'>
                <p className='text-4xl font-bold inline border-b-4 border-black'>About</p>
            </div>

            {/* **CHANGE 3 & 4: Reduced Top Margin (mt-20 -> mt-8) and Smaller Font (text-xl -> text-lg)** */}
            <p className='text-lg mt-8'>Diplômée en ingénierie aéronautique, j’ai commencé ma carrière dans les hangars de maintenance aéronautique, où j’ai travaillé directement sur les moteurs, les trains d’atterrissage et les systèmes mécaniques. Ces années passées à manipuler les outils, à suivre les procédures de sécurité et à diagnostiquer des problèmes techniques m’ont appris la rigueur, la méthode et la patience — des qualités essentielles dans tout environnement technologique.</p>

            <br />

            {/* **CHANGE 4: Smaller Font (text-xl -> text-lg)** */}
            <p className='text-lg'>
            C’est cette même curiosité pour la précision et la performance qui m’a conduite à me tourner vers le développement informatique et l’intelligence artificielle. Aujourd’hui, en suivant une licence en Intelligence Artificielle et Science des Données à l’EPSI Montpellier, j’explore comment la data et le machine learning peuvent transformer la maintenance, la conception et l’efficacité des systèmes techniques.
            </p>

            <br />

            {/* **CHANGE 4: Smaller Font (text-xl -> text-lg)** */}
            <p className='text-lg'>
                Mon ambition est de créer un pont entre le monde physique de l’aéronautique et celui numérique de l’IA, en exploitant les données pour améliorer la fiabilité, la prévision des pannes et la durabilité des systèmes mécaniques. Cette transition n’est pas un changement de direction, mais une évolution naturelle — de la clé à molette aux algorithmes, toujours animée par le même moteur : la recherche de la précision et de l’innovation.
            </p>
        </div>
    </div>
    )
}

export default About