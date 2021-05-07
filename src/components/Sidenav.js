import React from 'react'
import './SideNav.css'
import iconTemplate from '../utils/Writers Mode-Default Template/Icon-templates.svg'

const Sidenav = () => {
    return (
        <div className="sideNav">
            <div className="sideNav-icon" >
            </div>
            <div className="sideNav-template">
                <img src={iconTemplate} style={{width:'25px'}} alt="template" />
                <p>templates</p>
            </div>
        </div>
    )
}

export default Sidenav
