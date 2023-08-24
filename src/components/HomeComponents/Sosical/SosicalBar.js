import React from 'react'
import { BsGithub, BsMailbox } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
import { Link } from 'react-router-dom';
function SosicalBar() {
    return (
        <div>
            <ul className='sosial-buttons'>
                <Link to={"https://github.com/EdebaliErman"}>
                    <BsGithub size={32} />
                </Link>
                <Link to={"https://www.linkedin.com/in/edebali-erman-a38821239/"}>
                    <AiFillLinkedin size={32} />
                </Link>
                <Link to={"/contact"}>
                    <BsMailbox size={32} />
                </Link>
            </ul>
        </div>
    )
}

export default SosicalBar
