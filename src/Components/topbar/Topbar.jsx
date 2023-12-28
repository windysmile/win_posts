
import React from 'react'
import Iconprofile from '../icon_profile/Iconprofile';
import Logo from '../logo/Logo';
import './topbar-style.scss';
import AppsIcon from '@mui/icons-material/Apps';
import MessageIcon from '@mui/icons-material/Message';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import Badge from '@mui/material/Badge';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Menubar from '../menubar/Manubar';
import { useSelector } from "react-redux"

function Topbar(){
    const userInfo = useSelector((params) => params.profile.profileInfo);

    return (
        <div className="top-bar">
            <div className="swrapper">
                <div className="logo-search">
                    <Logo></Logo>
                    <div className="search">
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Search Win"
                            inputProps={{ 'aria-label': 'search win' }}
                        />
                        <IconButton className='button-search' type="button" sx={{ p: '5px 10px' }} aria-label="search">
                            <SearchIcon className="search-icon" />
                        </IconButton>
                    </div>
                </div>
                <div className="menu-bar">
                    <Menubar></Menubar>
                </div>
                <div className="noti-profile-icon">
                    <div className='app'>
                        <AppsIcon className='icon' fontSize="large"></AppsIcon>
                    </div>
                    <div className='badge'>
                        <Badge color="secondary" badgeContent={5}>
                            <MessageIcon className="icon" fontSize="large" />
                        </Badge>
                        <Badge color="secondary" badgeContent={3}>
                            <CircleNotificationsIcon className="icon" fontSize="large" />
                        </Badge>
                    </div>
                    <Iconprofile size={'40px'} profile={userInfo}></Iconprofile>
                </div>
            </div>
        </div>
    )
}

export default Topbar;