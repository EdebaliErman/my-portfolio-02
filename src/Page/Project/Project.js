import React from 'react'
import ProjectCard from '../../components/ProjectComponents/ProjectCard/ProjectCard'

function Project() {
  return (
    <div className='flex flex-1 flex-wrap justify-center absolute left-0  
    mt-36 overflow-auto w-[96rem] h-[50rem] snap-x
    2xl:w-[74rem] 
    xl:w-[78rem] 
    lg:w-[40rem]  lg:mt-64 
    md:w-96 md:m-36 md:mt-64 sm:mt-64 sm:w-[30rem]
    '>


      <ProjectCard
        title={`Pokemon`}
        url={process.env.PUBLIC_URL + "/assets/Pokemon.png"}
        link={`https://edebalierman.github.io/`} />
      <ProjectCard
        title={`Card Game`}
        url={process.env.PUBLIC_URL + "/assets/cardgame.png"}
        link={`https://github.com/EdebaliErman/kodluyoruz-redux-11`} />


      <ProjectCard
        title={`Mor Gruop`}
        url={process.env.PUBLIC_URL + "/assets/morgroup.png"}
        link={`#`} />
      <ProjectCard
        title={`Rick And Morty App`}
        url={process.env.PUBLIC_URL + "/assets/rickandmorty.png"}
        link={`https://github.com/EdebaliErman/kodluyoruz-redux-01`} />

      <ProjectCard
        title={`To Do App`}
        url={"https://media.licdn.com/dms/image/D4D22AQEJnxXVXOS0vA/feedshare-shrink_1280/0/1682255914090?e=1695859200&v=beta&t=J7mF087TDDLaSwiWcVa03934UXVcF27udKI-kmSFHX8"}
        link={`https://github.com/EdebaliErman/kodluyoruz-redux-01`} />

      <ProjectCard
        title={`Shoping App`}
        url={"https://media.licdn.com/dms/image/C5622AQHvwUWPiXzxnQ/feedshare-shrink_2048_1536/0/1678851131914?e=1695859200&v=beta&t=sSH4joLBTdGxz4Z-Hfa9gQLmN4YgRrgb0i_fJAyDyNo"}
        link={`https://github.com/EdebaliErman/kodluyoruz-react-19/tree/master`} />
      <ProjectCard
        title={`Chat App`}
        url={"https://media.licdn.com/dms/image/C4D22AQHVsEUofY2D9w/feedshare-shrink_2048_1536/0/1678314269130?e=1695859200&v=beta&t=FTLG7w8iXN79YFUDmO7pz4j4EvDIm8DqXCSfEt8e6Jk"}
        link={`https://github.com/EdebaliErman/kodluyoruz-react-14`} />
      <ProjectCard
        title={`Weather App`}
        url={"https://user-images.githubusercontent.com/105870243/223570020-e7dcedb0-ba6b-44db-b8f8-c7839d428bb2.png"}
        link={`https://github.com/EdebaliErman/kodluyoruz-react-12`} />
      <ProjectCard
        title={`Element App`}
        url={"https://media.licdn.com/dms/image/D4D22AQFq_qXTmKJKZQ/feedshare-shrink_1280/0/1692711798847?e=1695859200&v=beta&t=4weo8tdSfZmjnhey42r-wpcNFGSv6ulAEUhdHvPF7Ok"}
        link={`https://chimerical-macaron-e6c1a1.netlify.app/`} />
      <ProjectCard
        title={`Discord Bot App`}
        url={"https://media.licdn.com/dms/image/D4D22AQHHdn2ZVbmPzQ/feedshare-shrink_800/0/1692378268185?e=1695859200&v=beta&t=iPFUuhuP_GgRwuVzV2jQe5pThcT65eVtAFsuTqbG-GY"}
        link={`https://github.com/EdebaliErman/DiscordBot`} />
      <ProjectCard
        title={`Weather App`}
        url={"https://media.licdn.com/dms/image/D4D22AQF9Rfqul6sGJQ/feedshare-shrink_2048_1536/0/1691000644690?e=1695859200&v=beta&t=wsy-XpzJNazi0-5agOab1idPsgr0LCkmc1qsbN3k87o"}
        link={`https://storied-malasada-bbaf6d.netlify.app/`} />
      <ProjectCard
        title={`Makropreviewer App`}
        url={"https://user-images.githubusercontent.com/105870243/255211376-007a03a7-4729-4f1c-90c3-0821fb4dbf32.png"}
        link={`https://github.com/EdebaliErman/kodluyoruz-redux-09`} />
      <ProjectCard
        title={`Phone App`}
        url={"https://media.licdn.com/dms/image/D4D22AQFp-o9DMwyHRA/feedshare-shrink_800/0/1683208620305?e=1695859200&v=beta&t=Z4l1QY0waID0Dyf0ZJmMDl-r7wg3FC3GU73JQTw6BT4"}
        link={`https://github.com/EdebaliErman/kodluyoruz-redux-06`} />

      <ProjectCard
        title={`Money App`}
        url={"https://media.licdn.com/dms/image/D4D22AQEREpXAIlbTPw/feedshare-shrink_2048_1536/0/1682849944595?e=1695859200&v=beta&t=UCwQAntTknMgpFG_FpluOd_Kbf3_xbQzk0FS3uFWJjI"}
        link={`https://github.com/EdebaliErman/kodluyoruz-redux-05`} />


    </div>
  )
}

export default Project
