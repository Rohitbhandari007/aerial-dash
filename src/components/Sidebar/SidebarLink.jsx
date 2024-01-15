import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/sidebar.css'
import { useState } from 'react';
import polygonSvg from '../../assets/img/polygon.svg'

const SidebarLink = ({ name, url, image, isActive }) => {

  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  const imgClassName = isActive ? 'active-img' : 'inactive-img';
  const isActiveLink = isActive ? 'active-nav' : 'inactive-nav';
  
  return (
    <div className="sidebar-link" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className={`active-indicator ${isActiveLink}`}></div>
      <Link to={url} className='link-item'>
        <img src={image} alt={name} className={`sidebar-img ${imgClassName}`} />
      </Link>
      {showTooltip && <div className="tooltip">
        <img src={polygonSvg} alt="" className='tooltip-img' />
        <div className='tooltip-text'>{name}</div>
      </div>}

    </div>
  );
};

export default SidebarLink;
