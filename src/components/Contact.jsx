import React from 'react'

const Contact = () => {
    return (
        <div name='contact' className='h-screen w-full  bg-gradient-to-b from-black via-black to-pink-900'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8 text-pink-100'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-900'>Contact</p>
                    <p className='py-6'>Get in touch here.</p>
                </div>

                <div>
                    <form action="" className=''>
                        <input type="text" name='name' placeholder='Your name here..' className='p-2 bg-transparent border-2 rounded-md text-pink-50 focus:outline-none' />
                        <input type="email" name='name' placeholder='email@gmail.com..' className='p-2 bg-transparent border-2 rounded-md text-pink-50 focus:outline-none' />
                        <textarea name="message" id="" cols="30" rows="10" className='p-2 bg-transparent border-2 rounded-md text-pink-200 focus:outline-none'></textarea>
                        <button className='text-pink-100 bg-gradient-to-b from-purple-300 to-purple-900 cursor-pointer px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 group w-fill'>Let's Talk</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact