import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import SosicalBar from '../Sosical/SosicalBar'
import ProfileButtons from '../ProfileButtons/ProfileButtons'
function ProfileHeadText() {
    return (
        <div>
            <h1>EDEBALİ ERMAN</h1>
            <h2>I AM   <TypeAnimation
                sequence={[
                    'FRONT-END',
                    1000,
                    'FRONT-END DEVELOPER',
                    1000
                ]}
                className='text-cyan-900'
                wrapper="span"
                speed={50}
                repeat={Infinity}
            /> </h2>
            <p>Hi guys, I'm 23 years old and graduated from Computer Programmer.
                <br /> Myself Front-End I am developing as an end developer
            </p>
            <SosicalBar />
            <ProfileButtons />
        </div>
    )
}

export default ProfileHeadText
