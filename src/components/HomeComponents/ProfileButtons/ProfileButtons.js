import React from 'react'
import { Link } from 'react-router-dom'

function ProfileButtons() {
    return (
        <div className='home-buttons'>
            <Link to={"/contact"}>
                <button className='contact-button'>Contact me</button>
            </Link>
            <Link to={"/about"}>
                <button className='portfolio-button'>My Portfolio</button>
            </Link>
        </div>
    )
}

export default ProfileButtons
