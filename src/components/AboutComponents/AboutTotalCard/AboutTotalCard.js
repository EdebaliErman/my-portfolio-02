import React from 'react'

function AboutTotalCard({total}) {
    return (
        <div className='about-total-card'>
            <div>
                <h2>{total.totalPulus.year}</h2>
                <h4>{total.totalText.yearText}</h4>
            </div>
            <div>
                <h2>{total.totalPulus.commit}</h2>
                <h4>{total.totalText.commitText}</h4>
            </div>
            <div>
                <h2>{total.totalPulus.project}</h2>
                <h4>{total.totalText.projectText}</h4>
            </div>
        </div>
    )
}

export default AboutTotalCard
