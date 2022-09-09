import React from 'react'

const About = () => {
    return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-pink-900 to-black text-pink-50'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-black'>About</p>
            </div>

            <p className='text-xl mt-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias consequuntur, inventore dicta earum eveniet assumenda iste tempora vitae perferendis facere sapiente, odio beatae laborum porro quis optio aut facilis sed ipsum cupiditate non laudantium iure! Et fugit iusto laudantium itaque deserunt recusandae harum voluptatum libero similique quos? Beatae, velit a.</p>

            <br />

            <p className='text-xl'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis laboriosam eligendi at. Dolore id reprehenderit distinctio ullam provident, ex iure quasi aperiam iusto mollitia, dolorum architecto rerum eos aut. Ratione autem repudiandae nesciunt? Nisi, culpa nulla facere, vitae dolorum commodi similique laboriosam accusamus, laudantium nesciunt iusto? Similique dolorum saepe ducimus!
            </p>
        </div>
    </div>
    )
}

export default About