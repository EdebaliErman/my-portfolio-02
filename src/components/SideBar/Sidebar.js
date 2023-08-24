import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar({ icon, color,link }) {
    return (
        <div className={`${color} svg-background`}>
            <Link to={link}>
                {icon}
            </Link>
        </div>
    )
}

export default Sidebar
