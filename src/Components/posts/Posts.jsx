import { IconButton } from "@mui/material";
import Iconprofile from "../icon_profile/Iconprofile";
import './posts.scss'
import InputBase from '@mui/material/InputBase';
import CloseIcon from '@mui/icons-material/Close';
import PeopleIcon from '@mui/icons-material/People';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';

import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPosts } from "../../Features/winDataSlice";
import InputEmoji from "react-input-emoji";
import moment from "moment";
import Dragdropfile from "../dragdropfile/Dragdropfile";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    p: 1,
};

function Posts() {

    const userInfo = useSelector((params) => params.profile.profileInfo);
    const dispatch = useDispatch();
    const [posts, setPosts] = useState({
        text: ''
    })
    const [open, setOpen] = useState(false);
    const [dragdrop, setDragdrop] = useState(false);
    const [files, setFiles] = useState([]);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleDragdrop = (isOpen) => setDragdrop(isOpen)

    const handlePosts = () => {
        dispatch(addPosts({ 
            date: moment().format(), 
            actionPerson: userInfo,
            text: posts.text, 
            photos: files, 
            videos: [],  
            feeling: {
                like: 0,
                superb: 0,
                wow: 0,
                angry: 0
            },
            feelingActionPerson: [],
            comments: [],
            isOpenComment: false
        }))
        handleClose();
        setPosts({ text:'' })
        setFiles([])
        setDragdrop(false)
    }

    const handleOnEnter = (text) => console.log(text);

    return (
        <div className="add-posts">
            <Iconprofile size={'35px'} profile={userInfo}></Iconprofile>
            <InputBase
                className="input-posts"
                placeholder="Add posts"
                inputProps={{ 'aria-label': 'add posts' }}
                onClick={handleOpen}
            />
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className="box-modal">
                    <div className="modal-container">
                        <div className="header">
                            <div className="title"><h2>Create Posts</h2></div>
                            <div className="close">
                                <IconButton className="button-media" onClick={handleClose}>
                                    <CloseIcon className="icon" />
                                </IconButton>
                            </div>
                        </div>
                        <div className="body">
                            <div className="profile">
                                <Iconprofile size={'35px'} profile={userInfo}></Iconprofile>
                                <div className="admin-posts">
                                    <div className="fullname">
                                        <span>Wuttipong Sangtamat</span>
                                    </div>
                                    <div className="limited-view">
                                        <IconButton>
                                            <PeopleIcon className="icon" fontSize="small" />
                                            <span>Friends</span>
                                            <ArrowDropDownIcon className="icon" fontSize="small" />
                                        </IconButton>
                                    </div>
                                </div>
                            </div>
                            <div className="text-posts">
                                <InputEmoji
                                    value={''}
                                    onChange={(e) => setPosts((value) => ({...value, text: e}))}
                                    cleanOnEnter
                                    onEnter={handleOnEnter}
                                    placeholder="What are you thinking?">
                                </InputEmoji>
                            </div>
                            <div className="drag-drop">
                                {dragdrop && <Dragdropfile files={files} setFiles={setFiles}></Dragdropfile>}
                            </div>
                            <div className="photo-video-posts">
                                <div className="label-posts">
                                    <span>Add it to your post.</span>
                                </div>
                                <div className="button-photo-video">
                                    <IconButton onClick={() => handleDragdrop(!dragdrop)}>
                                        <PhotoLibraryIcon className="icon" fontSize="large"></PhotoLibraryIcon>    
                                    </IconButton>
                                    <IconButton>
                                        <VideoLibraryIcon className="icon" fontSize="large"></VideoLibraryIcon>
                                    </IconButton>
                                </div>
                            </div>
                        </div>
                        <div className="footer">
                            <IconButton className="button-post" onClick={handlePosts}>
                                <span>Posts</span>
                            </IconButton>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    )
}

export default Posts;