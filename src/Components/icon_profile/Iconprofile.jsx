import React from 'react'
import './iconprofile.scss';
import { useSelector } from 'react-redux';

function Iconprofile(params) {
    const profileImg = params?.profile?.profile_img

    return (
        <div className='profile-swapper' style={{ width: params?.size, height: params?.size }}>
            <div className="profile-img" style={{ backgroundImage: `url(${profileImg})` }}></div>
        </div>
    )
}

export default Iconprofile;