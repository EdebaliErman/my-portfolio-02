import React from 'react'

function AboutTextCard({ text }) {
  return (
    <div className='about-text-card'>
      <h2 >{text.head}</h2>
      <h3 >{text.job}</h3>
      <p className=' mt-5 mb-5'>{text.paragraph}
        <br /> {text.paragraph2}
        <br /> {text.paragraph3}
        <br />{text.paragraph4} </p>
    </div>
  )
}

export default AboutTextCard
