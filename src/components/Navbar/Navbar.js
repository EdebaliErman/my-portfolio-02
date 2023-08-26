import React from 'react'
import Sidebar from '../SideBar/Sidebar'
function Navbar({icon}) {
    return (
        <div className='navbar group '>
            <Sidebar className={"group-hover:group"} link={"/"} icon={icon.home}  />
            <Sidebar link={"/about"} icon={icon.info}  />
            <Sidebar link={"/project"} icon={icon.react} />
            <Sidebar link={"/contact"} icon={icon.contact}  />
        </div>
    )
}

export default Navbar
