
import './menubar.scss';
import HomeIcon from '@mui/icons-material/Home';
import IconButton from '@mui/material/IconButton';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import StoreIcon from '@mui/icons-material/Store';

import { useSelector, useDispatch } from 'react-redux';
import { menuActiveIndex } from '../../Features/winDataSlice';


function Menubar() {
    const menuIndex = useSelector((state) => state.menuIndex)
    const dispatch = useDispatch()

    const handleMenu = (index) => {
        if(index === menuIndex) return;
        dispatch(menuActiveIndex(index));
    }

    return (
        <div className='menu-swrapper'>
            <IconButton className={ menuIndex === 0 ? 'active': '' } onClick={() => handleMenu(0)}>
                <HomeIcon className="icon" fontSize="large" />
            </IconButton>
            <IconButton className={ menuIndex === 1 ? 'active': '' } onClick={() => handleMenu(1)}>
                <VideoLibraryIcon className="icon" fontSize="large" />
            </IconButton>
            <IconButton className={ menuIndex === 2 ? 'active': '' } onClick={() => handleMenu(2)}>
                <StoreIcon className="icon" fontSize="large" />
            </IconButton>
        </div>
    )
}

export default Menubar