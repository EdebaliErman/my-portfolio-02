import React from 'react'
import ProfileCard from '../../components/HomeComponents/ProfileCard/ProfileCard'
import { data } from '../../data/data'

function Home( ) {
  return (
    <div>
    <ProfileCard 
    img={data.profileKart.img}
    text={data.profileKart.profileHeadText}
    social={data.profileKart.social}
    />
    </div>
  )
}

export default Home
