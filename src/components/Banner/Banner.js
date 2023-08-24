import React from 'react'

function Banner() {
    return (
        <div className='flex justify-around items-center absolute top-0  w-full'>
            <div className='flex justify-center items-center'>
                <img
                    className='bg-none w-24 h-24 drop-shadow-sm  shadow-cyan-400'

                    src={process.env.PUBLIC_URL + "/assets/logo.png"}
                    alt='logo' />
                <span className='drop-shadow-sm '>
                    <h1 className='text-5xl bg-gradient-to-br from-black to-blue-800 via-cyan-600 m-2 '>Edebali<br/> <span className='text-cyan-50 '>Erman</span></h1>
                </span>

            </div>
            <button className='contact-button' >Work with me</button>
        </div>
    )
}

export default Banner
