import React from 'react'
import './Header.css'
import thumbnail from '../utils/Writers Mode-Default Template/Profile-thumbnail.png'

const Header = () => {
    
    return (
        <div className="header">
            <div className="heading" >
                <p> Editing Project heading</p>
            </div>
            <div className="right-header">
                <div className="upgrade">
                    UPGRADE
                </div>
                <div>
                    <img style={{height:'40px',width:'40px',marginTop:'10px'}}src={thumbnail} alt="user"/>
                </div>
            </div>
        </div>
    )
}

export default Header
