import React from 'react'

import { Link } from 'react-router-dom';
function SosicalBar({social}) {
    return (
        <div>
            <ul className='sosial-buttons'>
                <Link to={`${social.github}`}>
                   {social.githubSvg}
                </Link>
                <Link  to={`${social.linkedin}`}>
                {social.linkedinSvg}         
                </Link>
                <Link to={"/contact"}>
                {social.mailSvg}
                </Link>
            </ul>
        </div>
    )
}

export default SosicalBar
