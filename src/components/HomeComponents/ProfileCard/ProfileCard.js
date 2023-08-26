import React from 'react'
import ProfileHeadText from '../ProfileHeadText/ProfileHeadText'


function ProfileCard({img,text,social}) {
    return (
        <div className='profile-card '>
            <ProfileHeadText 
            text={text}
            social={social}
            />
            <img src={img} alt='avatar' />
        </div>
    )
}

export default ProfileCard
