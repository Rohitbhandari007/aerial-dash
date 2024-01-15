import React from 'react';
import { Link } from 'react-router-dom';
import bellIcon from '../../assets/img/bell.svg'
import messageIcon from '../../assets/img/message.svg'
import profileImg from '../../assets/img/profile.png'
import dropdownSvg from '../../assets/img/dropdown.svg'
import searchSvg from '../../assets/img/search.svg'
import '../../assets/css/navbar.css'





const NavComponent = () => {
    return (
        <div className="nav-container">
            <div className="left-area">
                <h4>Dashboard</h4>
            </div>
            <div className="right-area">
                <div className="search-item">
                <img src={searchSvg} alt="" />
                    <input type="text" placeholder='Search for transaction, item, etc'/>
                </div>
                <div className="actions">
                    <img src={bellIcon} alt="" />
                    <img src={messageIcon} alt="" />
                    <div className="profile-and-dropdown">
                        <div className="profile-img">
                            <img src={profileImg} alt="" />
                        </div>
                        <img src={dropdownSvg} alt="" className='dropdown-icon' />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default NavComponent;
