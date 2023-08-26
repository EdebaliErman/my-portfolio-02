import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import SosicalBar from '../Sosical/SosicalBar'
import ProfileButtons from '../ProfileButtons/ProfileButtons'
function ProfileHeadText({text,social}) {
    return (
        <div className='profile-head-text'>
            <h1>{text.name}</h1>
            <h2>I AM   <TypeAnimation
                sequence={[
                    'FRONT-END',
                    1000,
                    'FRONT-END DEVELOPER',
                    1000
                ]}
                className='text-job'
                wrapper="span"
                speed={50}
                repeat={Infinity}
            /> </h2>
            <p>{text.paragraph}
                <br /> {text.paragraph2}
            </p>
            <SosicalBar social={social} />
            <ProfileButtons />
        </div>
    )
}

export default ProfileHeadText
