import React from 'react'
import AboutTotalCard from '../../components/AboutComponents/AboutTotalCard/AboutTotalCard'
import AboutTextCard from '../../components/AboutComponents/AboutTextCard/AboutTextCard'
import ProfileButtons from '../../components/HomeComponents/ProfileButtons/ProfileButtons'
import { data } from '../../data/data'

function About() {
  return (
    <div className='about'>
      <img src={data.about.img} alt="Resim" />
      <div>
        <AboutTextCard text={data.about.text} />
        <AboutTotalCard total={data.about.total} />
        <ProfileButtons />
      </div>
    </div>
  )
}

export default About
