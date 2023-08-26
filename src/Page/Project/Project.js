import React from 'react'
import ProjectCard from '../../components/ProjectComponents/ProjectCard/ProjectCard'
import { data } from '../../data/data'

function Project() {
  return (
    <div className='project'>
      <div className='flex flex-wrap justify-center items-center'>
        {
          data.project.map(p => <ProjectCard
            url={p.url}
            title={p.title}
            link={p.link}
          />)
        }
      </div>
    </div>
  )
}

export default Project
