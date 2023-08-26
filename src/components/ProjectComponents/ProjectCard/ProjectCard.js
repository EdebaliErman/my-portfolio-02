import React from 'react'
import { Link } from 'react-router-dom'

function ProjectCard({ url, title, link }) {
    return (
        <div className='project-card'>
            <img src={url} alt='url'  />
            <div >
                <h4 >{title}</h4>
            </div>
            <Link to={link}>
                <button className='contact-button'>See Project</button>
            </Link>

        </div>
    )
}

export default ProjectCard
