
import { useSelector } from "react-redux"
import Iconprofile from "../../icon_profile/Iconprofile"
import './mainmenu.scss';
import PeopleIcon from '@mui/icons-material/People';
import IconButton from '@mui/material/IconButton';
import StoreIcon from '@mui/icons-material/Store';
import HistoryIcon from '@mui/icons-material/History';
import GroupsIcon from '@mui/icons-material/Groups';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';

function Mainmenu() {
    const userInfo = useSelector((params) => params.profile.profileInfo);

    return (
        <div className="main-menu-container">
            <div className="user-info">
                <Iconprofile size={'35px'} profile={userInfo}></Iconprofile>
                <div className="full-name">
                    <span>{ userInfo.fullname }</span>
                </div>
            </div>
            <div className="side-menu-widget">
                <div className="menu-item">
                    <IconButton>
                        <PeopleIcon fontSize="large"></PeopleIcon>
                        <span>Frinds</span>
                    </IconButton>
                </div>
                <div className="menu-item">
                    <IconButton>
                        <StoreIcon fontSize="large"></StoreIcon>
                        <span>Marketplace</span>
                    </IconButton>
                </div>
                <div className="menu-item">
                    <IconButton>
                        <HistoryIcon fontSize="large"></HistoryIcon>
                        <span>History</span>
                    </IconButton>
                </div>
                <div className="menu-item">
                    <IconButton>
                        <GroupsIcon fontSize="large"></GroupsIcon>
                        <span>Groups</span>
                    </IconButton>
                </div>
                <div className="menu-item">
                    <IconButton>
                        <ArrowDropDownCircleIcon fontSize="large"></ArrowDropDownCircleIcon>
                        <span>See more</span>
                    </IconButton>
                </div>
            </div>
        </div>
    );
}

export default Mainmenu;