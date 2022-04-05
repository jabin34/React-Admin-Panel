import React from 'react';
import './Sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CategoryIcon from '@mui/icons-material/Category';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import RedditIcon from '@mui/icons-material/Reddit';
import SettingsIcon from '@mui/icons-material/Settings';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LogoutIcon from '@mui/icons-material/Logout';
const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='top'>
                <span className='logo'>Admin Panel </span>
            </div>
            <hr/>
            <div className='center'>
                <ul> 
                    <p className='title'>MAIN</p>
                    <li>
                        <DashboardIcon className="icons"/>
                        <span>Dashboard</span>
                    </li>
                    <p className='title'>LISTS</p>
                    <li>
                    <PersonOutlineIcon className="icons"/>
                        <span>Users</span>
                    </li>
                    <li>
                        <CategoryIcon className="icons"/>
                        <span>Products</span>
                    </li>
                    <li>
                        <BookmarkBorderIcon className="icons"/>
                        <span>Orders</span>
                    </li>
                    <li>
                        <DeliveryDiningIcon className="icons"/>
                        <span>Delivery</span>
                    </li>
                    <p className='title'>USEFUL LINK</p>
                    <li>
                        <QueryStatsIcon className="icons"/>
                        <span>Stats</span>
                    </li>
                    <li>
                     <CircleNotificationsIcon className="icons"/>
                        <span>Notification</span>
                    </li>
                    <p className='title'>SERVICE</p>
                    <li>
                        <SettingsSystemDaydreamIcon className="icons"/>
                        <span>System Health</span>
                    </li>
                    <li>
                        <RedditIcon className="icons"/>
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsIcon className="icons"/>
                        <span>Setting</span>
                    </li>
                    <p className='title'>USER</p>
                    <li>
                        <AdminPanelSettingsIcon className="icons"/>
                        <span>Profile</span>
                    </li>
                    <li>
                        <LogoutIcon className="icons"/>
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className='bottom'> 
            <div className="colors-option"></div>
            <div className="colors-option"></div>
           
           
            </div>
        </div>
    );
};

export default Sidebar;