import React from 'react'
import ProfileHeadText from '../ProfileHeadText/ProfileHeadText'


function ProfileCard() {
    return (
        <div className='flex gap-10 items-center justify-center'>
            <ProfileHeadText />
            <img src={process.env.PUBLIC_URL + "/assets/EdebaliErman2.png"} alt='avatar' />
        </div>
    )
}

export default ProfileCard
