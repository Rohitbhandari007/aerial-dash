import React from 'react';
import '../../assets/css/sidebar.css'
import SidebarLink from './SidebarLink';
import dashboardIcon from '../../assets/img/dashboard.svg'
import fileIcon from '../../assets/img/file.svg'
import brandIcon from '../../assets/img/brand.svg'
import analyticsIcon from '../../assets/img/analytics.svg'
import walletIcon from '../../assets/img/wallet.svg'
import settingIcon from '../../assets/img/settings.svg'
import logoutIcon from '../../assets/img/log-out.svg'


import { useLocation } from 'react-router-dom';


const Sidebar = () => {

    const location = useLocation();
    // Check if the provided URL matches the current active URL
    const isLinkActive = (url) => {
        return location.pathname === url;
    };


    return (
        <div className="sidebar">
            <div className="top-links">
                <SidebarLink
                    name="Dashboard"
                    url="/"
                    image={brandIcon}
                    isActive={true}
                />
                <SidebarLink
                    name="Dashboard"
                    url="/"
                    image={dashboardIcon}
                    isActive={isLinkActive("/")}
                />

                <SidebarLink
                    name="Document"
                    url="/document"
                    image={fileIcon}
                    isActive={isLinkActive("/document")}
                />
                <SidebarLink
                    name="Analytics"
                    url="/analytics"
                    image={analyticsIcon}
                    isActive={isLinkActive("/analytics")}
                />
                <SidebarLink
                    name="Wallet"
                    url="/wallet"
                    image={walletIcon}
                    isActive={isLinkActive("/wallet")}
                />
            </div>
            <div className="bottom-links">

                <SidebarLink
                    name="Settnigs"
                    url="/settings"
                    image={settingIcon}
                    isActive={isLinkActive("/settings")}
                />
                <SidebarLink
                    name="Logout"
                    url="/logout"
                    image={logoutIcon}
                    isActive={isLinkActive("/logout")}
                />
            </div>
        </div>
    );
};

export default Sidebar;
