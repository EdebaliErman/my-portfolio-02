import React from 'react'
import Sidebar from '../SideBar/Sidebar'
import { IoIosHome } from 'react-icons/io';
import { SiManageiq } from 'react-icons/si';
import { GrReactjs } from 'react-icons/gr';
import { TiContacts } from 'react-icons/ti';
function Navbar() {
    return (
        <div className='navbar group '>
            <Sidebar className={"group-hover:group"} link={"/"} icon={<IoIosHome size={52} />} color={"backdrop-blur bg-gradient-to-rt from-black   to-transparent"} />
            <Sidebar link={"/about"} icon={<SiManageiq size={52} />} color={"backdrop-blur bg-gradient-to-rt from-transparent   to-black"} />
            <Sidebar link={"/project"} icon={<GrReactjs size={52} />} color={"backdrop-blur bg-gradient-to-rt from-transparent   to-black"} />
            <Sidebar link={"/contact"} icon={<TiContacts size={52} />} color={"backdrop-blur bg-gradient-to-rt from-transparent   to-black"} />
        </div>
    )
}

export default Navbar
