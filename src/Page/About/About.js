import React from 'react'
import AboutTotalCard from '../../components/AboutComponents/AboutTotalCard/AboutTotalCard'
import AboutTextCard from '../../components/AboutComponents/AboutTextCard/AboutTextCard'
import ProfileButtons from '../../components/HomeComponents/ProfileButtons/ProfileButtons'

function About() {
  return (
    <div className='flex gap-12'>
      <img className='bg-none rounded-3xl opacity-90 ' src={process.env.PUBLIC_URL + "/assets/EdebaliErman2.png"} alt="Resim" />
      <div>
        <AboutTextCard />
        <AboutTotalCard />
        <ProfileButtons />
      </div>
    </div>
  )
}

export default About
