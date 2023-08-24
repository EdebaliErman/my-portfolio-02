import React from 'react'
import { Link } from 'react-router-dom'

function ProjectCard({ url, title, link }) {
    return (
        <div className=' p-3 m-3 shadow-2xl shadow-black p-5 h-[33rem] w-max rounded-3xl relative  '>
            <img src={url} alt='url' className='rounded-3xl ' />
            <div className='text-left '>
                <h4 className='  m-3 text-cyan-900  font-mono font-bold m-3 w-max bg-gradient-to-l p-3 m-3 from-blue-100 to-cyan-300 rounded-r-3xl rounded-xl'>{title}</h4>

            </div>
                <Link to={link}>
                    <button className='absolute  bottom-0 right-0 rounded-l-3xl font-mono rounded-xl bg-gradient-to-l p-3 m-3 from-blue-100 to-cyan-300 text-cyan-900 font-bold'>See Project</button>
                </Link>

        </div>
    )
}

export default ProjectCard
