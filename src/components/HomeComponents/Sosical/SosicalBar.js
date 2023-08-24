import React from 'react'
import { BsGithub, BsMailbox } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
import { Link } from 'react-router-dom';
function SosicalBar() {
    return (
        <div>
            <ul className='sosial-buttons'>
                <Link to={""}>
                    <BsGithub size={32} />
                </Link>
                <Link to={""}>
                    <AiFillLinkedin size={32} />
                </Link>
                <Link to={""}>
                    <BsMailbox size={32} />
                </Link>
            </ul>
        </div>
    )
}

export default SosicalBar
