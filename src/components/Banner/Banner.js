import React from 'react'

function Banner({banner}) {
    return (
        <div className='banner'>
            <div className='left-banner'>
                <img className='left-banner-img'
                    src={banner.img}
                    alt='logo' />
                <span className='left-banner-span'>
                    <h1 className=' left-banner-span-h1'>{banner.name}<br/> <span className='left-banner-span-h1-span'>{banner.surname}</span></h1>
                </span>
            </div>
            <button className='contact-button' >Work with me</button>
        </div>
    )
}

export default Banner
